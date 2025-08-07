/**
 * Journey Types for Agenoverse
 * Interfaces for journey/milestone data
 */

// Base Journey Interface (matches your backend model)
export interface Journey {
  _id: string;
  title: string;
  description: string;
  date: Date;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create Journey Request
export interface CreateJourneyRequest {
  title: string;
  description: string;
  date: Date;
}

// Update Journey Request
export type UpdateJourneyRequest = Partial<CreateJourneyRequest>;

// Journey with File Upload
export interface CreateJourneyWithFileRequest extends CreateJourneyRequest {
  image?: File;
}

export interface UpdateJourneyWithFileRequest extends UpdateJourneyRequest {
  image?: File;
}

// Journey Filters
export interface JourneyFilters {
  search?: string;
  dateRange?: {
    start?: Date;
    end?: Date;
  };
}

// Journey Sort Options
export type JourneySortField = "title" | "date" | "createdAt";

export interface JourneySortOptions {
  field: JourneySortField;
  order: "asc" | "desc";
}

// Journey List Item (for summary views)
export interface JourneyListItem {
  _id: string;
  title: string;
  description: string;
  date: Date;
  imageUrl?: string;
}

// Journey Detail View
export type JourneyDetail = Journey;

// Journey Timeline Item (for timeline display)
export interface JourneyTimelineItem {
  _id: string;
  title: string;
  description: string;
  date: Date;
  imageUrl?: string;
  year: number;
  month: number;
}
