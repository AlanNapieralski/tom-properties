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

export const title = 'Let us valuate your property'

export const addresses = ['123 Baker Street,  London,  NW1 6XE,  United Kingdom'].map(val => ({ label: val, value: val }))

export const propertyTypes: ComboboxItem[] = ['example'].map(val => ({ label: val, value: val }))

export const valuationTypes: ComboboxItem[] = ['example'].map(val => ({ label: val, value: val }))

export const noOfBeds: ComboboxItem[] = ['studio', '1', '2', '3', '4', '5', '6', '6+'].map(val => ({ label: val, value: val }))
