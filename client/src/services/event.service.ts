/**
 * Event Service - Type-safe event operations
 */

import { apiClient } from "../api/client";
import { EVENTS_ENDPOINTS } from "../api/endpoints";
import type { Event, ApiResponse } from "../types";

// Simple input types (aligned with backend model exactly)
interface CreateEventData {
  title: string;
  description: string;
  date: string; // ISO date string
  location: string;
  imageUrl?: string;
  registrationLink?: string; // Backend field name
  pastEvent?: boolean;
}

interface UpdateEventData {
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  imageUrl?: string;
  registrationLink?: string; // Backend field name
  pastEvent?: boolean;
}

export class EventService {
  // Get all events
  static async getEvents(): Promise<ApiResponse<Event[]>> {
    return apiClient.get<Event[]>(EVENTS_ENDPOINTS.BASE);
  }

  // Get upcoming events only
  static async getUpcomingEvents(): Promise<ApiResponse<Event[]>> {
    return apiClient.get<Event[]>(EVENTS_ENDPOINTS.UPCOMING);
  }

  // Get past events only
  static async getPastEvents(): Promise<ApiResponse<Event[]>> {
    return apiClient.get<Event[]>(EVENTS_ENDPOINTS.PAST);
  }

  // Get event by ID
  static async getEvent(id: string): Promise<ApiResponse<Event>> {
    return apiClient.get<Event>(EVENTS_ENDPOINTS.BY_ID(id));
  }

  // Create new event
  static async createEvent(data: CreateEventData): Promise<ApiResponse<Event>> {
    return apiClient.post<Event>(EVENTS_ENDPOINTS.BASE, data);
  }

  // Create event with image
  static async createEventWithImage(
    data: CreateEventData,
    imageFile: File
  ): Promise<ApiResponse<Event>> {
    return apiClient.uploadFile<Event>(
      EVENTS_ENDPOINTS.BASE,
      imageFile,
      "image",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Update event
  static async updateEvent(
    id: string,
    data: UpdateEventData
  ): Promise<ApiResponse<Event>> {
    return apiClient.patch<Event>(EVENTS_ENDPOINTS.BY_ID(id), data);
  }

  // Update event with new image
  static async updateEventWithImage(
    id: string,
    data: UpdateEventData,
    imageFile: File
  ): Promise<ApiResponse<Event>> {
    return apiClient.uploadFile<Event>(
      EVENTS_ENDPOINTS.BY_ID(id),
      imageFile,
      "image",
      data as unknown as Record<string, string | number | boolean>
    );
  }

  // Delete event
  static async deleteEvent(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(EVENTS_ENDPOINTS.BY_ID(id));
  }
}
