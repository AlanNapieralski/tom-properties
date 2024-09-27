export type NavLinkType = {
  name: string
  url?: string
  theme?: 'dark' | 'light'
}

const homeLink: NavLinkType[] = [
  {
    name: 'Home',
    url: '/',
    theme: 'dark'
  }
]

const mainLinks: NavLinkType[] = [
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

const secondaryLinks: NavLinkType[] = [
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
]

export {
  homeLink,
  mainLinks,
  secondaryLinks
}
