/**
 * API Configuration for Agenoverse Client
 * Centralized configuration for all API-related settings
 */

export const API_CONFIG = {
  // Base URLs for different environments
  BASE_URL: {
    development: "http://localhost:8000",
    staging: "https://staging-api.agenoverse.com",
    production: "https://api.agenoverse.com",
  },

  // Request timeouts (in milliseconds)
  TIMEOUT: {
    default: 10000, // 10 seconds
    upload: 30000, // 30 seconds for file uploads
    download: 60000, // 60 seconds for downloads
  },

  // Request retry configuration
  RETRY: {
    attempts: 3,
    delay: 1000, // 1 second base delay
    backoff: 2, // Exponential backoff multiplier
  },

  // API endpoints
  ENDPOINTS: {
    // Projects
    PROJECTS: "/projects",
    PROJECT_BY_ID: (id: string) => `/projects/${id}`,

    // Blogs
    BLOGS: "/blogs",
    BLOG_BY_ID: (id: string) => `/blogs/${id}`,

    // Team
    TEAM: "/team",
    TEAM_BY_ID: (id: string) => `/team/${id}`,

    // Services
    SERVICES: "/services",
    SERVICE_BY_ID: (id: string) => `/services/${id}`,

    // Events
    EVENTS: "/events",
    EVENT_BY_ID: (id: string) => `/events/${id}`,

    // Journey
    JOURNEY: "/journey",
    JOURNEY_BY_ID: (id: string) => `/journey/${id}`,

    // Contact
    CONTACTS: "/contacts",
    CONTACT_BY_ID: (id: string) => `/contacts/${id}`,

    // Event Contact
    EVENT_CONTACTS: "/event-contact",
    EVENT_CONTACT_BY_ID: (id: string) => `/event-contact/${id}`,
  },

  // File upload configuration
  UPLOAD: {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: {
      images: ["image/jpeg", "image/png", "image/webp", "image/gif"],
      documents: ["application/pdf", "application/msword"],
    },
    fieldNames: {
      project: "image",
      blog: ["coverImage", "photoUrl"],
      team: "photoUrl",
      service: "icon",
      event: "image",
      journey: "image",
    },
  },

  // Response data structure
  RESPONSE_STRUCTURE: {
    success: "success",
    data: "data",
    message: "message",
    statusCode: "statusCode",
  },

  // Cache configuration
  CACHE: {
    defaultTTL: 5 * 60 * 1000, // 5 minutes
    strategies: {
      projects: 10 * 60 * 1000, // 10 minutes
      blogs: 15 * 60 * 1000, // 15 minutes
      team: 30 * 60 * 1000, // 30 minutes
      services: 30 * 60 * 1000, // 30 minutes
    },
  },
} as const;

// Get current environment
export const getCurrentEnvironment = ():
  | "development"
  | "staging"
  | "production" => {
  const env = import.meta.env.MODE;

  if (env === "production") return "production";
  if (env === "staging") return "staging";
  return "development";
};

// Get base URL for current environment
export const getBaseURL = (): string => {
  const env = getCurrentEnvironment();
  return import.meta.env.VITE_API_BASE_URL || API_CONFIG.BASE_URL[env];
};
