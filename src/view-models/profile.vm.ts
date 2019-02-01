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
  experienceList: IExperience[];
  skills: ISkill[];
}

export interface IExperience {
  iconClass: string;
  companyName: string;
  jobTitle: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}

export interface ISkill {
  name: string;
  star: number;
}
