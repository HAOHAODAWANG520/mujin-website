/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'MUJIN LIMITED',
  email: 'harrywang.mujin@gmail.com',
  phoneForTel: '+86 130-5165-3220',
  phoneFormatted: '(0086) 130-5165-3220',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'Lic# 123456',
  address: {
    lineOne: '650 CHEUNG SHA WAN ROAD',
    lineTwo: 'CHINA SHIPBUILDING TOWER 19F',
    city: 'KOWLOON',
    state: 'HONG KONG',
    zip: '80206',
    country: 'CN',
    mapLink: 'https://www.google.com/maps/place/China+Shipbuilding+Tower/@22.3387608,114.1522978,17z/data=!3m1!4b1!4m6!3m5!1s0x34040753cfb6fb2f:0xe5870f2cf4853f6d!8m2!3d22.3387608!4d114.1522978!16s%2Fg%2F11d_8cdjkb?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D',
  },
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },
  domain: 'https://www.example.com',
} as const;

export type Client = typeof client;
