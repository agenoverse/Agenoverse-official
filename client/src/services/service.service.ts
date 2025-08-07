/**
 * Service Service - Type-safe service operations
 * (For your "Services" business offerings resource)
 */

import { apiClient } from "../api/client";
import { SERVICES_ENDPOINTS } from "../api/endpoints";
import type { Service, ApiResponse } from "../types";

// Simple input types aligned with backend model
interface CreateServiceData {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

interface UpdateServiceData {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
}

export class ServiceService {
  // Get all services
  static async getServices(): Promise<ApiResponse<Service[]>> {
    return apiClient.get<Service[]>(SERVICES_ENDPOINTS.BASE);
  }

  // Get service by ID
  static async getService(id: string): Promise<ApiResponse<Service>> {
    return apiClient.get<Service>(SERVICES_ENDPOINTS.BY_ID(id));
  }

  // Create new service
  static async createService(
    data: CreateServiceData
  ): Promise<ApiResponse<Service>> {
    return apiClient.post<Service>(SERVICES_ENDPOINTS.BASE, data);
  }

  // Update service
  static async updateService(
    id: string,
    data: UpdateServiceData
  ): Promise<ApiResponse<Service>> {
    return apiClient.patch<Service>(SERVICES_ENDPOINTS.BY_ID(id), data);
  }

  // Delete service
  static async deleteService(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(SERVICES_ENDPOINTS.BY_ID(id));
  }
}
