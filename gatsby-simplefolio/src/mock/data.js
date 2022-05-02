import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'naberina', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'naberina',
  subtitle: '#餃子部',
  cta: 'More Info',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'イベント駆動しているエンジニアです。',
  paragraphTwo: 'Ruby, JavaScript, AWS あたりを触っています。',
  paragraphThree: '餃子が好きです。餃子を食べることを「自主練」と呼んでいます。',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/nabeerina',
    },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: 'https://qiita.com/naberina',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/naberina',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
