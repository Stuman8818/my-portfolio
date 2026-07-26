export interface ProjectImageConfig {
  src: string;
  alt: string;
}

export type ProjectStatus =
  | "completed"
  | "active"
  | "in-development"
  | "concept";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  projectType?: string;
  status?: ProjectStatus;
  dates?: string;
  featured?: boolean;
  displayOrder?: number;
  technologies: string[];
  responsibilities?: string[];
  challenges?: string[];
  solutions?: string[];
  outcomes?: string[];
  image?: ProjectImageConfig;
  galleryImages?: ProjectImageConfig[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  confidentialityNotice?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  companyUrl: string;
  summary: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  title: string;
}
