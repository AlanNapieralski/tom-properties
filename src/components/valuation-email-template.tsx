import * as React from 'react';

export type ValuationEmailTemplateProps = {
  email: string
  bedsNo: string
  propertyType: string
  valType: string
  address: string
  inputAddress: string
}

export const ValuationEmailTemplate: React.FC<Readonly<ValuationEmailTemplateProps>> = ({
  inputAddress,
  email,
  bedsNo,
  propertyType,
  valType,
  address
}) => (
  <div>
    <p>
      <span style={{ fontWeight: 'bold' }}>Customer&apos;s Email: </span>
      <span>{email}</span>
    </p>
    <p>
      <span style={{ fontWeight: 'bold' }}>Address: </span>
      <span>{inputAddress} {address}</span>
    </p>
    <p>
      <span style={{ fontWeight: 'bold' }}>Number of beds: </span>
      <span>{bedsNo}</span>
    </p>
    <p>
      <span style={{ fontWeight: 'bold' }}>Property Type: </span>
      <span>{propertyType}</span>
    </p>
    <p>
      <span style={{ fontWeight: 'bold' }}>Valuation Type: </span>
      <span>{valType}</span>
    </p>
  </div>
);
