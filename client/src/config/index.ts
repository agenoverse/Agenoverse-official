/**
 * Configuration Index - Barrel exports for all config modules
 * Provides centralized access to all configuration settings
 */

// Main configuration exports
export { API_CONFIG, getCurrentEnvironment, getBaseURL } from "./api.config";
export {
  ENV,
  IS_DEVELOPMENT,
  IS_STAGING,
  IS_PRODUCTION,
  validateEnvironment,
  logEnvironmentInfo,
} from "./environment";
export { APP_CONFIG } from "./app.config";

// Type exports
export type {
  NavigationItem,
  ProjectCategory,
  BlogCategory,
  EventType,
  ThemeMode,
} from "./app.config";

// Import for internal use
import { API_CONFIG } from "./api.config";
import {
  ENV,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  validateEnvironment,
  logEnvironmentInfo,
} from "./environment";
import { APP_CONFIG } from "./app.config";

// Re-export commonly used configurations for convenience
export const { BASE_URL, ENDPOINTS, TIMEOUT, UPLOAD } = API_CONFIG;

export const { APP: APP_INFO, API: API_ENV, FEATURES, COMPANY } = ENV;

export const {
  META,
  NAVIGATION,
  UI,
  BUSINESS,
  PERFORMANCE,
  SEO,
  ERRORS,
  STORAGE,
} = APP_CONFIG;

// Configuration initialization function
export const initializeConfig = () => {
  // Log environment info in development
  if (IS_DEVELOPMENT) {
    logEnvironmentInfo();
  }

  // Validate environment
  const validation = validateEnvironment();
  if (!validation.isValid) {
    console.error("❌ Configuration validation failed:", validation.errors);

    // In production, you might want to show a user-friendly error
    if (IS_PRODUCTION) {
      throw new Error(
        "Application configuration is invalid. Please contact support."
      );
    }
  }

  console.log(
    `✅ ${APP_INFO.NAME} v${APP_INFO.VERSION} initialized in ${APP_INFO.ENVIRONMENT} mode`
  );
};
