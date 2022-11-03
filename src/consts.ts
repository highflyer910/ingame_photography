export const ROUTES = [
  {
    href: '/',
    label: 'Art',
  },
  {
    href: '/about',
    label: 'About',
  },
] as const;

export const SOCIAL = [
  {
    href: 'https://twitter.com/highflyer910',
    icon: 'twitter',
  },
  {
    href: 'https://www.linkedin.com/in/tmushambadze/',
    icon: 'linkedIn',
  },
] as const;

export const PERSONAL_INFO = {
  name: 'Teona',
  title: "In-Game Photography",
  subtitle: 'A collection of photos taken in VR',
  role: 'Digital Artist',
  contact: 'mailto:mushambadzeteona@gmail.com',
  avatar:
    'https://cdn.discordapp.com/attachments/1023544104698773564/1025325255843127386/Ema_portrait_of_a_young_men_with_snowy_mountains_at_the_backgro_9c3a800b-294c-481b-8c57-0c84ba46ba08.png',
  about:
    'During the day I am Software Engineer, but at night I switched into my Artistic side. Most of my creations are made with Mid Journey (AI generation), and later on improved using Adobe Photoshop.',
} as const;
