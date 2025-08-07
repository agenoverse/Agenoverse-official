/**
 * Project Types for Agenoverse
 * Interfaces for project-related data
 */

// Base Project Interface (matches your backend model exactly)
export interface Project {
  _id: string;
  title: string;
  description: string;
  content?: string; // Optional content field
  techStack: string[]; // Array of technology strings
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  dateStarted?: Date;
  dateCompleted?: Date;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Project Categories (matches backend enum)
export type ProjectCategory =
  | "Desktop Development"
  | "Web Development"
  | "Mobile Development"
  | "Data Science"
  | "AI/ML"
  | "Other";

// Create Project Request
export interface CreateProjectRequest {
  title: string;
  description: string;
  content?: string;
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  dateStarted?: Date;
  dateCompleted?: Date;
  featured?: boolean;
}

// Update Project Request
export type UpdateProjectRequest = Partial<CreateProjectRequest>;

// Project with File Upload
export interface CreateProjectWithFileRequest extends CreateProjectRequest {
  image?: File;
}

export interface UpdateProjectWithFileRequest extends UpdateProjectRequest {
  image?: File;
}

// Project Filters
export interface ProjectFilters {
  category?: ProjectCategory;
  featured?: boolean;
  techStack?: string[];
  dateRange?: {
    start?: Date;
    end?: Date;
  };
  search?: string;
}

// Project Sort Options
export type ProjectSortField =
  | "title"
  | "dateStarted"
  | "dateCompleted"
  | "createdAt"
  | "featured";

export interface ProjectSortOptions {
  field: ProjectSortField;
  order: "asc" | "desc";
}

// Project List Item (for summary views)
export interface ProjectListItem {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: ProjectCategory;
  techStack: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

// Project Detail View (includes all data)
export interface ProjectDetail extends Project {
  // Can add computed fields or additional data for detail view
  relatedProjects?: ProjectListItem[];
}
