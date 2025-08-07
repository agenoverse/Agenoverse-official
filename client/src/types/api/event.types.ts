/**
 * Event Types for Agenoverse
 * Interfaces for event-related data
 */

// Base Event Interface (matches your backend model)
export interface Event {
  _id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  imageUrl?: string;
  registrationLink?: string;
  pastEvent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Create Event Request
export interface CreateEventRequest {
  title: string;
  description: string;
  date: Date;
  location: string;
  registrationLink?: string;
  pastEvent?: boolean;
}

// Update Event Request
export type UpdateEventRequest = Partial<CreateEventRequest>;

// Event with File Upload
export interface CreateEventWithFileRequest extends CreateEventRequest {
  image?: File;
}

export interface UpdateEventWithFileRequest extends UpdateEventRequest {
  image?: File;
}

// Event Filters
export interface EventFilters {
  pastEvent?: boolean;
  location?: string;
  search?: string;
  dateRange?: {
    start?: Date;
    end?: Date;
  };
}

// Event Sort Options
export type EventSortField = "title" | "date" | "location" | "createdAt";

export interface EventSortOptions {
  field: EventSortField;
  order: "asc" | "desc";
}

// Event List Item (for summary views)
export interface EventListItem {
  _id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  imageUrl?: string;
  pastEvent: boolean;
}

// Event Detail View
export interface EventDetail extends Event {
  // Additional fields if needed
  attendeeCount?: number;
}

// Event Contact Interface (matches your eventContact model)
export interface EventContact {
  _id: string;
  name?: string;
  email: string;
  phone?: string;
  source: string;
  tags: string[];
  createdAt: Date;
}

// Create Event Contact Request
export interface CreateEventContactRequest {
  name?: string;
  email: string;
  phone?: string;
  source: string;
  tags?: string[];
}
