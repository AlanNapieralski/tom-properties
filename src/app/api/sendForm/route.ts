import { ContactEmailTemplate, ContactEmailTemplateProps } from '@/components/contact-email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { from, to } from '@/models/email-data'
import { title } from '@/models/site-metadata'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const props: ContactEmailTemplateProps = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: title + ': Contact',
      react: ContactEmailTemplate({ ...props }),
    });

    if (error) {
      return NextResponse.json({ error: 'Could not send the email.' }, { status: 500 })
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
