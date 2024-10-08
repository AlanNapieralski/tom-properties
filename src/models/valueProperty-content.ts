import { ComboboxItem } from "@/components/ui/Combobox"

export type ImageProps = {
  src: string,
  alt: string,
  width?: number,
  height?: number
}

export const valuePropertyImage: ImageProps = {
  src: "/assets/images/value-property.jpg",
  alt: 'properties',
  width: 2400,
  height: 1350
}

export const title = 'Request an Valuation'

const propertyTypesOptions = [
  'example'
]
const valuationTypesOptions = [
  'example'
]
const noOfBedsOptions = ['studio', '1', '2', '3', '4', '5', '6+']

export const propertyTypes: ComboboxItem[] = propertyTypesOptions.map(val => ({ label: val, value: val }))
export const valuationTypes: ComboboxItem[] = valuationTypesOptions.map(val => ({ label: val, value: val }))
export const noOfBeds: ComboboxItem[] = noOfBedsOptions.map(val => ({ label: val, value: val }))
