import { ContactEmailTemplate, ContactEmailTemplateProps } from '@/components/contact-email-template';
import { Resend } from 'resend';
import { from, to } from '@/models/email-data'
import { title } from '@/models/site-metadata'
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

<<<<<<< HEAD
export async function POST (req: NextRequest) {

  if (req.method !== 'POST') {
    return Response.json({ error: 'Method Not Allowed' }, {status: 405})
  }

  const props: ContactEmailTemplateProps = await req.json()
  console.log(props)
=======
export async function POST(req: NextRequest) {

  if (req.method !== 'POST') {
    return Response.json({ error: 'Method Not Allowed' }, { status: 405 })
  }

  const props: ContactEmailTemplateProps = await req.json()
>>>>>>> main

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: title + ': Contact',
      react: ContactEmailTemplate({ ...props }),
    });

<<<<<<< HEAD
    console.log(error)

    if (error) {
      return Response.json({ error: { errorBody: error, errorMessage: 'Please try again later'}, title: "Could not send the email" }, { status: 500})
=======
    if (error) {
      return Response.json({ error: { errorBody: error, errorMessage: 'Please try again later' }, title: "Could not send the email" }, { status: 500 })
>>>>>>> main
    }

    return Response.json({ data });
  } catch (error) {
<<<<<<< HEAD
    return Response.json({ error: { errorBody: error, errorMessage: 'Please try again later'}, title: "Could not send the email" }, { status: 500})
=======
    return Response.json({ error: { errorBody: error, errorMessage: 'Please try again later' }, title: "Could not send the email" }, { status: 500 })
>>>>>>> main
  }
}
