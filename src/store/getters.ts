
import { IProfile, IExperience, ISkill, IHobby } from '@/view-models/profile.vm';


export default {
  profile: (state: any): IProfile => state.profile,
  experienceList: (state: any): IExperience[] => state.profile.experienceList,
  skills: (state: any): ISkill[] => state.profile.skills,
  certifications: (state: any): string[] => state.profile.certifications,
  hobbys: (state: any): IHobby[] => state.profile.hobbys,
};
