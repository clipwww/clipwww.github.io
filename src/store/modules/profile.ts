
import { Module } from 'vuex';

export interface IProfile {
  name: string;
  nickName: string;
  jobTitle: string;
  email: string;
  mobile: string;
  location: string;
  facebook: string;
  googlePlus: string;
  linkedin: string;
  gitHub: string;
}

const menu: Module<IProfile, any> = {
  namespaced: true,
  state: {
    name: 'Name',
    nickName: 'Nick Name',
    jobTitle: 'Front End Engineer',
    email: 'clipwww@gmail.com',
    mobile: '0912345678',
    location: 'Taipei, TW',
    facebook: '',
    googlePlus: '',
    linkedin: '',
    gitHub: 'https://github.com/clipwww',
  },
};

export default menu;
