/**
 * Journey Service - Type-safe journey/milestone operations
 */

import { apiClient } from "../api/client";
import { JOURNEY_ENDPOINTS } from "../api/endpoints";
import type { Journey, ApiResponse } from "../types";

// Simple input types
interface CreateJourneyData {
  title: string;
  description: string;
  date: string; // ISO date string
  year?: number;
  category?: string;
  milestone?: boolean;
  achievement?: string;
  impact?: string;
  featured?: boolean;
}

interface UpdateJourneyData {
  title?: string;
  description?: string;
  date?: string;
  year?: number;
  category?: string;
  milestone?: boolean;
  achievement?: string;
  impact?: string;
  featured?: boolean;
}

export class JourneyService {
  // Get all journey entries
  static async getJourneyEntries(): Promise<ApiResponse<Journey[]>> {
    return apiClient.get<Journey[]>(JOURNEY_ENDPOINTS.BASE);
  }

  // Get journey entries by year
  static async getJourneyByYear(year: number): Promise<ApiResponse<Journey[]>> {
    return apiClient.get<Journey[]>(JOURNEY_ENDPOINTS.BY_YEAR(year));
  }

  // Get journey entry by ID
  static async getJourneyEntry(id: string): Promise<ApiResponse<Journey>> {
    return apiClient.get<Journey>(JOURNEY_ENDPOINTS.BY_ID(id));
  }

  // Create new journey entry
  static async createJourneyEntry(
    data: CreateJourneyData
  ): Promise<ApiResponse<Journey>> {
    return apiClient.post<Journey>(JOURNEY_ENDPOINTS.BASE, data);
  }

  // Create journey entry with image
  static async createJourneyEntryWithImage(
    data: CreateJourneyData,
    imageFile: File
  ): Promise<ApiResponse<Journey>> {
    return apiClient.uploadFile<Journey>(
      JOURNEY_ENDPOINTS.BASE,
      imageFile,
      "image",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Update journey entry
  static async updateJourneyEntry(
    id: string,
    data: UpdateJourneyData
  ): Promise<ApiResponse<Journey>> {
    return apiClient.patch<Journey>(JOURNEY_ENDPOINTS.BY_ID(id), data);
  }

  // Update journey entry with new image
  static async updateJourneyEntryWithImage(
    id: string,
    data: UpdateJourneyData,
    imageFile: File
  ): Promise<ApiResponse<Journey>> {
    return apiClient.uploadFile<Journey>(
      JOURNEY_ENDPOINTS.BY_ID(id),
      imageFile,
      "image",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Delete journey entry
  static async deleteJourneyEntry(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(JOURNEY_ENDPOINTS.BY_ID(id));
  }
}
