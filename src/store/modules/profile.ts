
import { Module } from 'vuex';
import { IProfile, IExperience, ISkill, IHobby } from '@/view-models/profile.vm';

const experienceList: IExperience[] = [
  {
    iconClass: 'fas fa-building',
    companyName: '香港商阿爾伊股份有限公司台灣分公司',
    jobTitle: 'Front-End Engineer',
    dateStart: '2017-08',
    dateEnd: '',
    description: '',
  },
  {
    iconClass: 'fas fa-building',
    companyName: '蝦米智慧媒體股份有限公司',
    jobTitle: 'Web前端工程師',
    dateStart: '2016-03',
    dateEnd: '2017-07',
    description: '',
  },
  {
    iconClass: 'fas fa-graduation-cap',
    companyName: '東海大學 資訊管理學系',
    jobTitle: '碩士',
    dateStart: '2013-09',
    dateEnd: '2015-09',
    description: '',
  },
  {
    iconClass: 'fas fa-graduation-cap',
    companyName: '東海大學 資訊工程學系',
    jobTitle: '學士',
    dateStart: '2009-09',
    dateEnd: '2013-06',
    description: '',
  },
];

const skills: ISkill[] = [
  { name: 'Git', star: 4 },
  { name: 'HTML5', star: 4 },
  { name: 'CSS3/SCSS', star: 4 },
  { name: 'JavaScript', star: 4 },
  { name: 'TypeScript', star: 3 },
  { name: 'jQuery', star: 5 },
  { name: 'Vue.js', star: 4 },
  { name: 'Nuxt.js', star: 4 },
  { name: 'Node.js', star: 3.5 },
  { name: 'Apollo Graphql', star: 2 },
  { name: 'PIXI.js', star: 2 },
  { name: '.NET MVC', star: 3 },
];

const certifications: string[] = [
  'JLPT N2',
  'BI軟體應用師',
  'SAP BI商業智能基礎管理師',
];

const hobbys: IHobby[] = [
  { name: '動畫', iconClass: 'fab fa-youtube' },
  { name: '漫畫', iconClass: 'fas fa-book' },
  { name: '遊戲', iconClass: 'fas fa-gamepad' },
  { name: '電影', iconClass: 'fas fa-film' },
  { name: '棒球', iconClass: 'fas fa-baseball-ball' },
];

const profile: Module<IProfile, any> = {
  namespaced: true,
  state: {
    name: '簡爾廷',
    nickName: 'David, Jian',
    jobTitle: 'Front-End Engineer',
    email: 'clipwww@gmail.com',
    mobile: '0925151578',
    location: 'Taipei, Taiwan',
    facebook: 'https://www.facebook.com/ET.Jian',
    instagram: 'https://www.instagram.com/jianerting/',
    googlePlus: 'https://plus.google.com/117050026050768355670',
    linkedin: 'www.linkedin.com/in/davidjian',
    gitHub: 'https://github.com/clipwww',
    experienceList,
    skills,
    certifications,
    hobbys,
  },
};

export default profile;
