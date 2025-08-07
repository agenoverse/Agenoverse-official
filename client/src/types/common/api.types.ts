/**
 * Common API Types for Agenoverse
 * Base interfaces used across all API responses
 */

// Standard API Response Structure (matches your backend ApiResponse)
export interface ApiResponse<T = unknown> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

// API Error Response
export interface ApiError {
  statusCode: number;
  message: string;
  success: false;
  errors?: string[];
}

// Pagination Types
export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// HTTP Methods
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// Upload Types
export interface FileUpload {
  file: File;
  fieldName: string;
}

export interface MultipleFileUpload {
  files: FileUpload[];
}

// Request Config
export interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
  retries?: number;
}

// Loading States
export type LoadingState = "idle" | "loading" | "success" | "error";

// API Hook Return Type
export interface ApiHookResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Mutation Hook Return Type
export interface MutationHookResult<T, P = Record<string, unknown>> {
  mutate: (params: P) => Promise<T>;
  loading: boolean;
  error: string | null;
  reset: () => void;
}
