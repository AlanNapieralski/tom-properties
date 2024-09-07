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

export const propertyTypes: ComboboxItem[] = [
  {
    label: 'exampleLabel',
    value: 'exampleValue'
  },
]

export const valuationTypes: ComboboxItem[] = [
  {
    label: 'exampleLabel',
    value: 'exampleValue'
  },
]
