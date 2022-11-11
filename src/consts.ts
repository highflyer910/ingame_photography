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
  role: 'In-Game Photographer',
  contact: 'mailto:mushambadzeteona@gmail.com',
  avatar:
    'https://res.cloudinary.com/highflyer910/image/upload/v1668194744/ingame_pics/5.png',
  about:
    'I am a Frontend Engineer, but at times I dive into art. My creations are made during my journey in virtual worlds, and later on improved using different graphic tools.',
} as const;
