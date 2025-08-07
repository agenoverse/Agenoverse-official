/**
 * Application Configuration for Agenoverse Client
 * General app settings and constants
 */

import { ENV } from "./environment";

export const APP_CONFIG = {
  // Application metadata
  META: {
    title: ENV.APP.NAME,
    description: ENV.APP.DESCRIPTION,
    version: ENV.APP.VERSION,
    author: "Agenoverse Team",
    keywords: [
      "web development",
      "AI agents",
      "digital solutions",
      "React",
      "TypeScript",
    ],
  },

  // Navigation configuration
  NAVIGATION: {
    mainMenu: [
      { path: "/", label: "Home", key: "home" },
      { path: "/about", label: "About", key: "about" },
      { path: "/services", label: "Services", key: "services" },
      { path: "/projects", label: "Projects", key: "projects" },
      { path: "/events", label: "Events", key: "events" },
      { path: "/blog", label: "Blog", key: "blog" },
      { path: "/contact", label: "Contact", key: "contact" },
    ],
    footerMenu: [
      { path: "/privacy", label: "Privacy Policy", key: "privacy" },
      { path: "/terms", label: "Terms of Service", key: "terms" },
      { path: "/sitemap", label: "Sitemap", key: "sitemap" },
    ],
  },

  // UI Configuration
  UI: {
    // Theme settings
    theme: {
      defaultMode: "light" as "light" | "dark" | "system",
      storageKey: "agenoverse-theme",
    },

    // Layout settings
    layout: {
      maxWidth: "1280px",
      containerPadding: "1rem",
      headerHeight: "4rem",
      footerHeight: "12rem",
    },

    // Animation settings
    animation: {
      duration: {
        fast: 150,
        normal: 300,
        slow: 500,
      },
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },

    // Breakpoints (matching Tailwind CSS)
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  // Business Logic Configuration
  BUSINESS: {
    // Pagination settings
    pagination: {
      defaultPageSize: 12,
      pageSizeOptions: [6, 12, 24, 48],
      maxPageSize: 100,
    },

    // Search settings
    search: {
      debounceDelay: 300,
      minQueryLength: 2,
      maxResults: 50,
    },

    // Form validation
    validation: {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[+]?[1-9][\d]{0,15}$/,
      password: {
        minLength: 8,
        requireSpecialChar: true,
        requireNumber: true,
        requireUppercase: true,
      },
    },

    // Project categories
    projectCategories: [
      "Web Development",
      "Mobile Development",
      "Data Science",
      "AI/ML",
      "Other",
    ] as const,

    // Blog categories
    blogCategories: [
      "Technology",
      "Business",
      "Development",
      "AI/ML",
      "Tutorials",
      "News",
    ] as const,

    // Event types
    eventTypes: [
      "Workshop",
      "Webinar",
      "Conference",
      "Meetup",
      "Training",
    ] as const,
  },

  // Performance Configuration
  PERFORMANCE: {
    // Lazy loading
    lazyLoading: {
      threshold: 0.1,
      rootMargin: "50px",
    },

    // Image optimization
    images: {
      quality: 85,
      formats: ["webp", "jpeg", "png"],
      sizes: {
        thumbnail: { width: 150, height: 150 },
        small: { width: 300, height: 200 },
        medium: { width: 600, height: 400 },
        large: { width: 1200, height: 800 },
      },
    },

    // Bundle optimization
    bundle: {
      chunkSize: 500 * 1024, // 500KB
      preloadKey: ["home", "about"],
    },
  },

  // SEO Configuration
  SEO: {
    defaultMeta: {
      robots: "index,follow",
      viewport: "width=device-width,initial-scale=1",
      charset: "utf-8",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: ENV.APP.NAME,
      url: "https://agenoverse.com",
      image: "/og-image.jpg",
    },
    twitter: {
      card: "summary_large_image",
      site: "@agenoverse",
      creator: "@agenoverse",
    },
  },

  // Error Handling
  ERRORS: {
    // Error boundaries
    boundary: {
      fallbackComponent: "ErrorFallback",
      logErrors: true,
    },

    // HTTP errors
    http: {
      retryAttempts: 3,
      retryDelay: 1000,
      timeoutMessage: "Request timed out. Please try again.",
      networkErrorMessage: "Network error. Please check your connection.",
    },

    // Form errors
    form: {
      requiredMessage: "This field is required",
      invalidEmailMessage: "Please enter a valid email address",
      invalidPhoneMessage: "Please enter a valid phone number",
    },
  },

  // Local Storage Keys
  STORAGE: {
    theme: "agenoverse-theme",
    language: "agenoverse-language",
    userPreferences: "agenoverse-preferences",
    authToken: "agenoverse-auth-token",
    cart: "agenoverse-cart",
  },
} as const;

// Type exports for better TypeScript support
export type NavigationItem = (typeof APP_CONFIG.NAVIGATION.mainMenu)[number];
export type ProjectCategory =
  (typeof APP_CONFIG.BUSINESS.projectCategories)[number];
export type BlogCategory = (typeof APP_CONFIG.BUSINESS.blogCategories)[number];
export type EventType = (typeof APP_CONFIG.BUSINESS.eventTypes)[number];
export type ThemeMode = typeof APP_CONFIG.UI.theme.defaultMode;
