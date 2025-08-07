/**
 * Environment Configuration for Agenoverse Client
 * Manages environment variables and app settings
 */

// Environment variable schema with defaults
const ENV_SCHEMA = {
  // API Configuration
  VITE_API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8000",
  VITE_APP_ENV:
    import.meta.env.VITE_APP_ENV || import.meta.env.MODE || "development",

  // App Configuration
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME || "Agenoverse",
  VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  VITE_APP_DESCRIPTION:
    import.meta.env.VITE_APP_DESCRIPTION ||
    "Agenoverse - Digital Solutions Company",

  // Feature Flags
  VITE_ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
  VITE_ENABLE_ERROR_TRACKING:
    import.meta.env.VITE_ENABLE_ERROR_TRACKING === "true",
  VITE_ENABLE_DEBUG_MODE: import.meta.env.VITE_ENABLE_DEBUG_MODE === "true",

  // External Services
  VITE_GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || "",
  VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN || "",
  VITE_HOTJAR_ID: import.meta.env.VITE_HOTJAR_ID || "",

  // Social Media
  VITE_COMPANY_EMAIL:
    import.meta.env.VITE_COMPANY_EMAIL || "info@agenoverse.com",
  VITE_COMPANY_PHONE: import.meta.env.VITE_COMPANY_PHONE || "+1234567890",
  VITE_COMPANY_ADDRESS: import.meta.env.VITE_COMPANY_ADDRESS || "Your Address",
  VITE_LINKEDIN_URL:
    import.meta.env.VITE_LINKEDIN_URL ||
    "https://linkedin.com/company/agenoverse",
  VITE_TWITTER_URL:
    import.meta.env.VITE_TWITTER_URL || "https://twitter.com/agenoverse",
  VITE_GITHUB_URL:
    import.meta.env.VITE_GITHUB_URL || "https://github.com/agenoverse",

  // Performance
  VITE_API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || "10000"),
  VITE_CACHE_TTL: parseInt(import.meta.env.VITE_CACHE_TTL || "300000"), // 5 minutes
} as const;

// Type-safe environment object
export const ENV = {
  // App Information
  APP: {
    NAME: ENV_SCHEMA.VITE_APP_NAME,
    VERSION: ENV_SCHEMA.VITE_APP_VERSION,
    DESCRIPTION: ENV_SCHEMA.VITE_APP_DESCRIPTION,
    ENVIRONMENT: ENV_SCHEMA.VITE_APP_ENV,
  },

  // API Configuration
  API: {
    BASE_URL: ENV_SCHEMA.VITE_API_BASE_URL,
    TIMEOUT: ENV_SCHEMA.VITE_API_TIMEOUT,
    CACHE_TTL: ENV_SCHEMA.VITE_CACHE_TTL,
  },

  // Feature Flags
  FEATURES: {
    ANALYTICS: ENV_SCHEMA.VITE_ENABLE_ANALYTICS,
    ERROR_TRACKING: ENV_SCHEMA.VITE_ENABLE_ERROR_TRACKING,
    DEBUG_MODE: ENV_SCHEMA.VITE_ENABLE_DEBUG_MODE,
  },

  // External Services
  SERVICES: {
    GOOGLE_ANALYTICS: ENV_SCHEMA.VITE_GOOGLE_ANALYTICS_ID,
    SENTRY_DSN: ENV_SCHEMA.VITE_SENTRY_DSN,
    HOTJAR_ID: ENV_SCHEMA.VITE_HOTJAR_ID,
  },

  // Company Information
  COMPANY: {
    EMAIL: ENV_SCHEMA.VITE_COMPANY_EMAIL,
    PHONE: ENV_SCHEMA.VITE_COMPANY_PHONE,
    ADDRESS: ENV_SCHEMA.VITE_COMPANY_ADDRESS,
    SOCIAL: {
      LINKEDIN: ENV_SCHEMA.VITE_LINKEDIN_URL,
      TWITTER: ENV_SCHEMA.VITE_TWITTER_URL,
      GITHUB: ENV_SCHEMA.VITE_GITHUB_URL,
    },
  },
} as const;

// Environment helpers
export const IS_DEVELOPMENT = ENV.APP.ENVIRONMENT === "development";
export const IS_STAGING = ENV.APP.ENVIRONMENT === "staging";
export const IS_PRODUCTION = ENV.APP.ENVIRONMENT === "production";

// Validation function
export const validateEnvironment = (): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  // Required environment variables
  const required = [{ key: "VITE_API_BASE_URL", value: ENV.API.BASE_URL }];

  required.forEach(({ key, value }) => {
    if (!value || value === "") {
      errors.push(`Missing required environment variable: ${key}`);
    }
  });

  // URL validation
  try {
    new URL(ENV.API.BASE_URL);
  } catch {
    errors.push("VITE_API_BASE_URL is not a valid URL");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Debug function (only in development)
export const logEnvironmentInfo = (): void => {
  if (IS_DEVELOPMENT && ENV.FEATURES.DEBUG_MODE) {
    console.group("🌍 Environment Configuration");
    console.log("Environment:", ENV.APP.ENVIRONMENT);
    console.log("API Base URL:", ENV.API.BASE_URL);
    console.log("Features:", ENV.FEATURES);
    console.log("Company Info:", ENV.COMPANY);
    console.groupEnd();

    const validation = validateEnvironment();
    if (!validation.isValid) {
      console.warn("⚠️ Environment validation errors:", validation.errors);
    }
  }
};
