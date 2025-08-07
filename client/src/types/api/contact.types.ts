/**
 * Contact Types for Agenoverse
 * Interfaces for contact form and communication data
 */

// Base Contact Interface (matches your backend model)
export interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Create Contact Request
export interface CreateContactRequest {
  name: string;
  email: string;
  message: string;
}

// Contact Form Data (for form validation)
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string; // Optional subject field
  phone?: string; // Optional phone field
}

// Contact Form Validation
export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
  phone?: string;
}

// Contact Filters (for admin view)
export interface ContactFilters {
  search?: string;
  dateRange?: {
    start?: Date;
    end?: Date;
  };
}

// Contact Sort Options
export type ContactSortField = "name" | "email" | "createdAt";

export interface ContactSortOptions {
  field: ContactSortField;
  order: "asc" | "desc";
}

// Contact List Item (for admin summary views)
export interface ContactListItem {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Contact Stats (for admin dashboard)
export interface ContactStats {
  totalContacts: number;
  contactsThisMonth: number;
  contactsThisWeek: number;
  responseRate?: number;
}

// Email Configuration (for backend email sending)
export interface EmailConfig {
  to: string[];
  subject: string;
  template: string;
  data: Record<string, unknown>;
}
