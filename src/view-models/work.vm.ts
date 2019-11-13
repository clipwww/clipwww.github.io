export interface WorkVM {
  companyName: string;
  projects: ProjectVM[];
}

export interface ProjectVM {
  title: string;
  description: string;
  tag: string[];
}