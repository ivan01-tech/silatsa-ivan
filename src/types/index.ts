export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  technologies: string[];
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}