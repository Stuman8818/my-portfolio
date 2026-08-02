export interface ProjectImageConfig {
  src: string;
  alt: string;
}

export interface ProjectHighlight {
  title: string;
  role?: string;
  description: string;
  technologies: string[];
  details?: string[];
  relatedWork?: {
    title: string;
    description: string;
    technologies: string[];
  };
  image?: ProjectImageConfig;
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
  company?: string;
  projectType?: string;
  status?: ProjectStatus;
  cardStatus?: string;
  cardImpact?: string;
  liveActionLabel?: string;
  dates?: string;
  featured?: boolean;
  displayOrder?: number;
  technologies: string[];
  responsibilities?: string[];
  challenges?: string[];
  solutions?: string[];
  outcomes?: string[];
  technicalApproach?: string[];
  keyTakeaway?: string;
  highlights?: ProjectHighlight[];
  image?: ProjectImageConfig;
  galleryImages?: ProjectImageConfig[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  confidentialityNotice?: string;
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
