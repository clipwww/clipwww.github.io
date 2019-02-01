
import { Module } from 'vuex';
import { IProfile, IExperience, ISkill } from '@/view-models/profile.vm';

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
  { name: 'GIT', star: 4 },
  { name: 'HTML5', star: 4 },
  { name: 'CSS3/SCSS', star: 4 },
  { name: 'JAVASCRIPT', star: 4 },
  { name: 'TYPESCRIPT', star: 3 },
  { name: 'JQUERY', star: 5 },
  { name: 'VUE.JS', star: 4 },
  { name: 'NUXT.JS', star: 4 },
  { name: 'NODE.JS', star: 3.5 },
  { name: 'APOLLO GRAPHQL', star: 2 },
  { name: 'PIXI.JS', star: 2 },
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
  },
};

export default profile;
