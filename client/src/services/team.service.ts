/**
 * Team Service - Type-safe team operations
 */

import { apiClient } from "../api/client";
import { TEAM_ENDPOINTS } from "../api/endpoints";
import type { TeamMember, ApiResponse } from "../types";

// Simple input types (aligned with backend)
interface CreateTeamMemberData {
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string; // Backend field name
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

interface UpdateTeamMemberData {
  name?: string;
  role?: string;
  bio?: string;
  photoUrl?: string; // Backend field name
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  expertise?: string[];
  joinedDate?: string;
  active?: boolean;
}

export class TeamService {
  // Get all team members
  static async getTeamMembers(): Promise<ApiResponse<TeamMember[]>> {
    return apiClient.get<TeamMember[]>(TEAM_ENDPOINTS.BASE);
  }

  // Get team members by role
  static async getTeamMembersByRole(
    role: string
  ): Promise<ApiResponse<TeamMember[]>> {
    return apiClient.get<TeamMember[]>(TEAM_ENDPOINTS.BY_ROLE(role));
  }

  // Get team member by ID
  static async getTeamMember(id: string): Promise<ApiResponse<TeamMember>> {
    return apiClient.get<TeamMember>(TEAM_ENDPOINTS.BY_ID(id));
  }

  // Create new team member
  static async createTeamMember(
    data: CreateTeamMemberData
  ): Promise<ApiResponse<TeamMember>> {
    return apiClient.post<TeamMember>(TEAM_ENDPOINTS.BASE, data);
  }

  // Create team member with profile image
  static async createTeamMemberWithImage(
    data: CreateTeamMemberData,
    imageFile: File
  ): Promise<ApiResponse<TeamMember>> {
    return apiClient.uploadFile<TeamMember>(
      TEAM_ENDPOINTS.BASE,
      imageFile,
      "profileImage",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Update team member
  static async updateTeamMember(
    id: string,
    data: UpdateTeamMemberData
  ): Promise<ApiResponse<TeamMember>> {
    return apiClient.patch<TeamMember>(TEAM_ENDPOINTS.BY_ID(id), data);
  }

  // Update team member with new profile image
  static async updateTeamMemberWithImage(
    id: string,
    data: UpdateTeamMemberData,
    imageFile: File
  ): Promise<ApiResponse<TeamMember>> {
    return apiClient.uploadFile<TeamMember>(
      TEAM_ENDPOINTS.BY_ID(id),
      imageFile,
      "profileImage",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Delete team member
  static async deleteTeamMember(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(TEAM_ENDPOINTS.BY_ID(id));
  }
}
