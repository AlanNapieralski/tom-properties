import { ContactEmailTemplate, ContactEmailTemplateProps } from '@/components/contact-email-template';
import { Resend } from 'resend';
import { from, to } from '@/models/email-data'
import { title } from '@/models/site-metadata'
import { NextApiRequest, NextApiResponse } from 'next'

import rateLimiter from '@/middleware/rateLimiter'

const resend = new Resend(process.env.RESEND_API_KEY);

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' }); // Handle non-POST methods
  }

  const props: ContactEmailTemplateProps = await req.body

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: title + ': Contact',
      react: ContactEmailTemplate({ ...props }),
    });

    if (error) {
      return res.status(500).json({ error: { errorBody: error, errorMessage: 'Could not send the email' } })
    }

    return res.json({ data });
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export const POST = rateLimiter(postHandler)
