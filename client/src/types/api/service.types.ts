/**
 * Service Types for Agenoverse
 * Interfaces for service-related data
 */

// Base Service Interface (matches backend model exactly)
export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string; // Backend field name
  link?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create Service Request
export interface CreateServiceRequest {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

// Update Service Request
export type UpdateServiceRequest = Partial<CreateServiceRequest>;

// Service with File Upload
export interface CreateServiceWithFileRequest extends CreateServiceRequest {
  iconFile?: File; // Separate file field to avoid confusion
}

export interface UpdateServiceWithFileRequest extends UpdateServiceRequest {
  iconFile?: File; // Separate file field to avoid confusion
}

// Service Filters
export interface ServiceFilters {
  search?: string;
}

// Service Sort Options
export type ServiceSortField = "title" | "createdAt";

export interface ServiceSortOptions {
  field: ServiceSortField;
  order: "asc" | "desc";
}

// Service List Item (for summary views)
export interface ServiceListItem {
  _id: string;
  title: string;
  description: string;
  icon: string; // Backend field name
}

// Service Detail View
export type ServiceDetail = Service;

// Service Stats (for admin dashboard)
export interface ServiceStats {
  totalServices: number;
  servicesWithLinks: number;
  servicesWithIcons: number;
}
