/**
 * API Endpoints Configuration
 * Centralized endpoint definitions for all API routes
 */

// Define API version consistently
const API_VERSION = "/api/v1";

// Projects Endpoints
export const PROJECTS_ENDPOINTS = {
  BASE: `${API_VERSION}/projects`,
  BY_ID: (id: string) => `${API_VERSION}/projects/${id}`,
  BY_CATEGORY: (category: string) =>
    `${API_VERSION}/projects?category=${category}`,
  FEATURED: `${API_VERSION}/projects?featured=true`,
} as const;

// Blogs Endpoints
export const BLOGS_ENDPOINTS = {
  BASE: `${API_VERSION}/blogs`,
  BY_ID: (id: string) => `${API_VERSION}/blogs/${id}`,
  BY_TAG: (tag: string) => `${API_VERSION}/blogs?tags=${tag}`,
  PUBLISHED: `${API_VERSION}/blogs?published=true`,
  BY_AUTHOR: (author: string) => `${API_VERSION}/blogs?author=${author}`,
} as const;

// Team Endpoints
export const TEAM_ENDPOINTS = {
  BASE: `${API_VERSION}/team`,
  BY_ID: (id: string) => `${API_VERSION}/team/${id}`,
  BY_ROLE: (role: string) => `${API_VERSION}/team?role=${role}`,
} as const;

// Services Endpoints
export const SERVICES_ENDPOINTS = {
  BASE: `${API_VERSION}/services`,
  BY_ID: (id: string) => `${API_VERSION}/services/${id}`,
  FEATURED: `${API_VERSION}/services?featured=true`,
} as const;

// Events Endpoints
export const EVENTS_ENDPOINTS = {
  BASE: `${API_VERSION}/events`,
  BY_ID: (id: string) => `${API_VERSION}/events/${id}`,
  UPCOMING: `${API_VERSION}/events?pastEvent=false`,
  PAST: `${API_VERSION}/events?pastEvent=true`,
} as const;

// Journey Endpoints
export const JOURNEY_ENDPOINTS = {
  BASE: `${API_VERSION}/journey`,
  BY_ID: (id: string) => `${API_VERSION}/journey/${id}`,
  BY_YEAR: (year: number) => `${API_VERSION}/journey?year=${year}`,
} as const;

// Contact Endpoints
export const CONTACT_ENDPOINTS = {
  BASE: `${API_VERSION}/contacts`,
  BY_ID: (id: string) => `${API_VERSION}/contacts/${id}`,
  SEND: `${API_VERSION}/contacts`,
} as const;

// Event Contact Endpoints
export const EVENT_CONTACT_ENDPOINTS = {
  BASE: `${API_VERSION}/event-contact`,
  BY_ID: (id: string) => `${API_VERSION}/event-contact/${id}`,
  BY_SOURCE: (source: string) =>
    `${API_VERSION}/event-contact?source=${source}`,
} as const;

// Query parameter builders
export const buildQueryString = (
  params: Record<string, string | number | boolean | string[]>
): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((item) => searchParams.append(key, item.toString()));
      } else {
        searchParams.append(key, value.toString());
      }
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

// Helper for building filtered endpoints
export const buildFilteredEndpoint = (
  baseEndpoint: string,
  filters: Record<string, string | number | boolean | string[]>
): string => {
  const queryString = buildQueryString(filters);
  return `${baseEndpoint}${queryString}`;
};

// Pagination helpers
export const buildPaginatedEndpoint = (
  baseEndpoint: string,
  page: number = 1,
  limit: number = 10,
  additionalParams?: Record<string, string | number | boolean | string[]>
): string => {
  const params = {
    page,
    limit,
    ...additionalParams,
  };
  return buildFilteredEndpoint(baseEndpoint, params);
};

// Export all endpoints
export const API_ENDPOINTS = {
  PROJECTS: PROJECTS_ENDPOINTS,
  BLOGS: BLOGS_ENDPOINTS,
  TEAM: TEAM_ENDPOINTS,
  SERVICES: SERVICES_ENDPOINTS,
  EVENTS: EVENTS_ENDPOINTS,
  JOURNEY: JOURNEY_ENDPOINTS,
  CONTACT: CONTACT_ENDPOINTS,
  EVENT_CONTACT: EVENT_CONTACT_ENDPOINTS,
} as const;
