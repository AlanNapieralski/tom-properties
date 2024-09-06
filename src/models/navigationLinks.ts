export type NavLinkType = {
  name: string
  url: string
  theme: 'dark' | 'light'
}

const navLinks: NavLinkType[] = [
  {
    name: 'Home',
    url: '/',
    theme: 'dark'
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
    name: 'Value my property',
    url: '/value-my-property',
    theme: 'dark'
  },
  {
    name: 'Contact Us',
    url: '#contact-us',
    theme: 'dark'
  }
]

export default navLinks
