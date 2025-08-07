/**
 * Team Types for Agenoverse
 * Interfaces for team member data
 */

// Social Links Interface (matches backend exactly)
export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  // Note: backend only has these three social links
}

// Base Team Member Interface (matches your backend model exactly)
export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string; // Backend uses photoUrl, not profileImageUrl
  socialLinks: SocialLinks;
  createdAt: Date;
  updatedAt: Date;
}

// Create Team Member Request (aligned with backend)
export interface CreateTeamMemberRequest {
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string;
  socialLinks?: SocialLinks;
}

// Update Team Member Request
export type UpdateTeamMemberRequest = Partial<CreateTeamMemberRequest>;

// Team Member with File Upload
export interface CreateTeamMemberWithFileRequest
  extends CreateTeamMemberRequest {
  photo?: File;
}

export interface UpdateTeamMemberWithFileRequest
  extends UpdateTeamMemberRequest {
  photo?: File;
}

// Team Member Filters
export interface TeamMemberFilters {
  role?: string;
  search?: string;
}

// Team Sort Options
export type TeamSortField = "name" | "role" | "createdAt";

export interface TeamSortOptions {
  field: TeamSortField;
  order: "asc" | "desc";
}

// Team Member List Item (for summary views)
export interface TeamMemberListItem {
  _id: string;
  name: string;
  role: string;
  photoUrl?: string;
  socialLinks: Pick<SocialLinks, "linkedin" | "github">;
}

// Team Member Detail View
export interface TeamMemberDetail extends TeamMember {
  // Additional computed fields if needed
  projects?: Array<{
    _id: string;
    title: string;
    role: string; // Role in this specific project
  }>;
}

// Team Stats
export interface TeamStats {
  totalMembers: number;
  roles: Array<{
    role: string;
    count: number;
  }>;
}
