module.exports = {
  siteTitle: 'Krushang Shah | Software Engineer',
  siteDescription:
    'Krushang Shah is a software engineer based in New York, NY who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Krushang Shah, Krushang, Shah, krushang598, software engineer, back-end engineer, data scientist, python, ccny',
  siteUrl: 'https://krushang.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-172656966-1',
  googleVerification: '4458b1c5-54fb-453c-8c59-1c2ce1b14ab3',
  name: 'Krushang Shah',
  location: 'New York, NY',
  email: 'krushang.shah28@gmail.com',
  github: 'https://github.com/krushang598',
  twitterHandle: '@krushangshah6',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/krushang598',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/krushang',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/krushangshah',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/krushang28',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/krushangshah6',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
