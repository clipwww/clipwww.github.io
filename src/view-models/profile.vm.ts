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
}

export interface IExperience {
  iconClass: string;
  companyName: string;
  jobTitle: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}
