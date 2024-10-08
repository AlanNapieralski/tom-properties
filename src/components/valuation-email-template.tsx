import * as React from 'react';

export type ValuationEmailTemplateProps = {
  selAddress: string
  email: string
  bedsNo: string
  propertyType: string
  valType: string
}

export const ValuationEmailTemplate: React.FC<Readonly<ValuationEmailTemplateProps>> = ({
  selAddress,
  email,
  bedsNo,
  propertyType,
  valType
}) => (
  <div>
    <p>
      <span style={{ fontWeight: 'bold' }}>Customer&apos;s Email: </span>
      <span>{email}</span>
    </p>
    <p>
      <span style={{ fontWeight: 'bold' }}>Address: </span>
      <span>{selAddress}</span>
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
