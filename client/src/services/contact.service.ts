/**
 * Contact Service - Type-safe contact operations
 */

import { apiClient } from "../api/client";
import { CONTACT_ENDPOINTS } from "../api/endpoints";
import type { Contact, ApiResponse } from "../types";

// Simple input types (aligned with backend model exactly)
interface CreateContactData {
  name: string;
  email: string;
  message: string;
}

interface UpdateContactData {
  name?: string;
  email?: string;
  message?: string;
}

export class ContactService {
  // Get all contacts (admin only)
  static async getContacts(): Promise<ApiResponse<Contact[]>> {
    return apiClient.get<Contact[]>(CONTACT_ENDPOINTS.BASE);
  }

  // Get contact by ID (admin only)
  static async getContact(id: string): Promise<ApiResponse<Contact>> {
    return apiClient.get<Contact>(CONTACT_ENDPOINTS.BY_ID(id));
  }

  // Send contact form (public endpoint)
  static async sendContact(
    data: CreateContactData
  ): Promise<ApiResponse<Contact>> {
    return apiClient.post<Contact>(CONTACT_ENDPOINTS.SEND, data);
  }

  // Update contact (admin only)
  static async updateContact(
    id: string,
    data: UpdateContactData
  ): Promise<ApiResponse<Contact>> {
    return apiClient.patch<Contact>(CONTACT_ENDPOINTS.BY_ID(id), data);
  }

  // Delete contact (admin only)
  static async deleteContact(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(CONTACT_ENDPOINTS.BY_ID(id));
  }
}
