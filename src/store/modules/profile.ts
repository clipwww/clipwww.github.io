
import { Module } from 'vuex';

export interface IProfile {
  name: string;
  nickName: string;
  jobTitle: string;
  email: string;
  mobile: string;
  location: string;
  facebook: string;
  instagram: string;
  googlePlus: string;
  linkedin: string;
  gitHub: string;
}

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
  },
};

export default profile;
