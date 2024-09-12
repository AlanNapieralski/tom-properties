import * as React from 'react';

export type ContactEmailTemplateProps = {
  name: string
  email: string
  tel: string
  message: string
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  tel,
  message
}) => (
  <div>
    <p>
      <span style={{ fontWeight: 'bold' }}>Customer: </span>
      <span>{name}, have contacted you!</span>
    </p>
    <p>
      <span style={{ fontWeight: 'bold' }}>Email: </span>
      <span>{email}</span>
    </p>
    {tel === '' ? null : <p>
      <span style={{ fontWeight: 'bold' }}>Phone Number: </span>
      <span>{tel}</span>
    </p>}
    <p>
      <span style={{ fontWeight: 'bold' }}>Customer&apos;s Inquiry: </span><br />
      <span>{message}</span>
    </p>
  </div>
);
