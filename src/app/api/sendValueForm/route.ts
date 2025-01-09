import { ValuationEmailTemplate } from '@/components/valuation-email-template';
import { NextRequest } from 'next/server';
import { ValuationEmailTemplateProps } from '@/components/valuation-email-template';
import { Resend } from 'resend';
import { from, to } from '@/models/email-data'
import { title } from '@/models/site-metadata'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const props: ValuationEmailTemplateProps = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: title + ': Valuation',
      react: ValuationEmailTemplate({ ...props })
    });

    if (error) {
      return Response.json({ error: { errorBody: error, errorMessage: 'Please try again later' }, title: "Could not send the email" }, { status: 500 })
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: { errorBody: error, errorMessage: 'Please try again later' }, title: "Could not send the email" }, { status: 500 })
  }
}
