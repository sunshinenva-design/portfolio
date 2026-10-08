import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Sunshine Villaflores',
  firstName: 'Sunshine',
  handle: '@sunshinenva',
  role: 'Virtual Assistant & Content Creator',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Computer Engineering Graduate',
  email: 'sunshine.villaflores.va@gmail.com',
  location: 'Tagum City, Philippines',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '2+ yrs', label: 'Remote Experience', Icon: Briefcase },
    { value: '50+', label: 'Students Managed', Icon: SealCheck },
    { value: 'GMT+8', label: 'Timezone', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Administrative Support.', line2: 'Digital Content Creator.' },
  hero: {
    body: 'Computer Engineering graduate specializing in administrative support, digital organization, and content creation.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Sunshine Villaflores Portrait',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://linkedin.com', iconPath: '/icons/linkedin.svg' },
    { label: 'Facebook profile', href: 'https://facebook.com', iconPath: '/icons/facebook.svg' },
    { label: 'Discord profile', href: 'https://discord.com', iconPath: '/icons/discord.svg' },
  ],
}
