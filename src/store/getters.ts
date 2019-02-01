
import { IProfile, IExperience, ISkill } from '@/view-models/profile.vm';


export default {
  profile: (state: any): IProfile => state.profile,
  experienceList: (state: any): IExperience[] => state.profile.experienceList,
  skills: (state: any): ISkill[] => state.profile.skills,
};
