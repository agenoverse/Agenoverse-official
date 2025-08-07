/**
 * Services Layer - Clean API Methods
 * Type-safe, easy-to-use service functions for each resource
 */

import { apiClient } from "../api/client";
import { PROJECTS_ENDPOINTS } from "../api/endpoints";
import type { Project, ApiResponse } from "../types";

// Simple input types for this service
interface CreateProjectData {
  title: string;
  description: string;
  content?: string;
  category?: string;
  techStack?: string[]; // Match backend field name
  githubUrl?: string;
  liveUrl?: string;
  dateStarted?: string;
  dateCompleted?: string;
  featured?: boolean;
}

interface UpdateProjectData {
  title?: string;
  description?: string;
  content?: string;
  category?: string;
  techStack?: string[]; // Match backend field name
  githubUrl?: string;
  liveUrl?: string;
  dateStarted?: string;
  dateCompleted?: string;
  featured?: boolean;
}

export class ProjectService {
  // Get all projects
  static async getProjects(): Promise<ApiResponse<Project[]>> {
    return apiClient.get<Project[]>(PROJECTS_ENDPOINTS.BASE);
  }

  // Get project by ID
  static async getProject(id: string): Promise<ApiResponse<Project>> {
    return apiClient.get<Project>(PROJECTS_ENDPOINTS.BY_ID(id));
  }

  // Create new project
  static async createProject(
    data: CreateProjectData
  ): Promise<ApiResponse<Project>> {
    return apiClient.post<Project>(PROJECTS_ENDPOINTS.BASE, data);
  }

  // Create project with image
  static async createProjectWithImage(
    data: CreateProjectData,
    imageFile: File
  ): Promise<ApiResponse<Project>> {
    return apiClient.uploadFile<Project>(
      PROJECTS_ENDPOINTS.BASE,
      imageFile,
      "image",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Update project
  static async updateProject(
    id: string,
    data: UpdateProjectData
  ): Promise<ApiResponse<Project>> {
    return apiClient.patch<Project>(PROJECTS_ENDPOINTS.BY_ID(id), data);
  }

  // Update project with new image
  static async updateProjectWithImage(
    id: string,
    data: UpdateProjectData,
    imageFile: File
  ): Promise<ApiResponse<Project>> {
    return apiClient.uploadFile<Project>(
      PROJECTS_ENDPOINTS.BY_ID(id),
      imageFile,
      "image",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Delete project
  static async deleteProject(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(PROJECTS_ENDPOINTS.BY_ID(id));
  }
}
