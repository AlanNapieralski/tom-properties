import { ContactEmailTemplate, ContactEmailTemplateProps } from '@/components/contact-email-template';
import { Resend } from 'resend';
import { from, to } from '@/models/email-data'
import { title } from '@/models/site-metadata'
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST (req: NextRequest) {

  if (req.method !== 'POST') {
    return Response.json({ error: 'Method Not Allowed' }, {status: 405})
  }

  const props: ContactEmailTemplateProps = await req.json()
  console.log(props)

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: title + ': Contact',
      react: ContactEmailTemplate({ ...props }),
    });

    console.log(error)

    if (error) {
      return Response.json({ error: { errorBody: error, errorMessage: 'Please try again later'}, title: "Could not send the email" }, { status: 500})
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: { errorBody: error, errorMessage: 'Please try again later'}, title: "Could not send the email" }, { status: 500})
  }
}