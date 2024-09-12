export type NavLinkType = {
  name: string
  url?: string
  theme?: 'dark' | 'light'
}

const navLinks: NavLinkType[] = [
  {
    name: 'Home',
    url: '/',
    theme: 'dark'
  },
  {
    name: 'divi',
  },
  {
    name: 'Home Renovation',
    url: '/renovation',
    theme: 'light'
  },
  {
    name: 'Bathrooms',
    url: '/bathrooms',
    theme: 'light'
  },
  {
    name: 'divi',
  },
  {
    name: 'For Landlords',
    url: '/landlords',
    theme: 'light'
  },
  {
    name: 'For Tenants',
    url: '/tenants',
    theme: 'light'
  },
  {
    name: 'For investors',
    url: '/investors',
    theme: 'light'
  },
  {
    name: 'divi',
  },
  {
    name: 'Value my property',
    url: '/value-my-property',
    theme: 'dark'
  },
  {
    name: 'Contact Us',
    url: '/#contact-us',
    theme: 'dark'
  }
]

export default navLinks
