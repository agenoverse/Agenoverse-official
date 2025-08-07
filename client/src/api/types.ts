/**
 * API-specific types and utilities
 * Simple HTTP-related types for API layer
 */

// Re-export common types to avoid imports all over the place
export type { ApiResponse, ApiError } from "../types/common/api.types";

// HTTP methods for type safety
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// Query parameters type
export type QueryParams = Record<string, string | number | boolean | undefined>;

// File upload metadata
export interface FileUploadMetadata {
  fieldName?: string;
  allowedTypes?: string[];
  maxSize?: number;
}

// Request configuration
export interface RequestConfig {
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;
}
