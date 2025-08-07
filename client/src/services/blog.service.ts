/**
 * Blog Service - Type-safe blog operations
 */

import { apiClient } from "../api/client";
import { BLOGS_ENDPOINTS } from "../api/endpoints";
import type { Blog, ApiResponse } from "../types";

// Simple input types (aligned with backend)
interface CreateBlogData {
  title: string;
  slug?: string; // Auto-generated if not provided
  content?: string;
  coverImage?: string;
  tags?: string[];
  author: {
    name: string;
    photoUrl?: string;
  };
}

interface UpdateBlogData {
  title?: string;
  slug?: string;
  content?: string;
  coverImage?: string;
  tags?: string[];
  author?: {
    name: string;
    photoUrl?: string;
  };
}

export class BlogService {
  // Get all blogs
  static async getBlogs(): Promise<ApiResponse<Blog[]>> {
    return apiClient.get<Blog[]>(BLOGS_ENDPOINTS.BASE);
  }

  // Get blog by ID
  static async getBlog(id: string): Promise<ApiResponse<Blog>> {
    return apiClient.get<Blog>(BLOGS_ENDPOINTS.BY_ID(id));
  }

  // Create new blog
  static async createBlog(data: CreateBlogData): Promise<ApiResponse<Blog>> {
    return apiClient.post<Blog>(BLOGS_ENDPOINTS.BASE, data);
  }

  // Create blog with image
  static async createBlogWithImage(
    data: CreateBlogData,
    imageFile: File
  ): Promise<ApiResponse<Blog>> {
    return apiClient.uploadFile<Blog>(
      BLOGS_ENDPOINTS.BASE,
      imageFile,
      "image",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Update blog
  static async updateBlog(
    id: string,
    data: UpdateBlogData
  ): Promise<ApiResponse<Blog>> {
    return apiClient.patch<Blog>(BLOGS_ENDPOINTS.BY_ID(id), data);
  }

  // Delete blog
  static async deleteBlog(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(BLOGS_ENDPOINTS.BY_ID(id));
  }
}
