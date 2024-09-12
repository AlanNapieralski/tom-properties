import { ValuationEmailTemplate } from '@/components/valuation-email-template';
import { NextRequest, NextResponse } from 'next/server';
import { ValuationEmailTemplateProps } from '@/components/valuation-email-template';
import { Resend } from 'resend';
import { from, to } from '@/models/email-data'
import { title } from '@/models/site-metadata'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const props: ValuationEmailTemplateProps = await req.json()
  console.log(props)

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: title + ': Valuation',
      react: ValuationEmailTemplate({ ...props })
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
