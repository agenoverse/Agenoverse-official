/**
 * Simplified API Client
 * Streamlined Axios instance with essential features
 */

import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { API_CONFIG as apiConfig } from "../config/api.config";
import type { ApiResponse, ApiError } from "../types/common/api.types";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: apiConfig.BASE_URL.development,
      timeout: apiConfig.TIMEOUT.default,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = this.getAuthToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        console.log(
          `[API Request] ${config.method?.toUpperCase()} ${config.url}`
        );

        return config;
      },
      (error) => {
        console.error("[API Request Error]", error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        console.log(`[API Response] ${response.status} ${response.config.url}`);
        return response.data; // Return the data directly
      },
      (error) => {
        return this.handleError(error);
      }
    );
  }

  private getAuthToken(): string | null {
    return (
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
    );
  }

  private handleError(
    error: Error & { response?: { status: number; data: unknown } }
  ): Promise<never> {
    // Network error
    if (!error.response) {
      const networkError: ApiError = {
        statusCode: 0,
        message: "Network error. Please check your internet connection.",
        success: false,
      };
      return Promise.reject(networkError);
    }

    const { status, data } = error.response;

    // Handle auth errors
    if (status === 401) {
      this.clearAuthToken();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }

    // Return standardized error
    const apiError: ApiError = {
      statusCode: status,
      message:
        (data as { message?: string })?.message ||
        "An unexpected error occurred",
      success: false,
      errors: (data as { errors?: string[] })?.errors,
    };

    return Promise.reject(apiError);
  }

  private clearAuthToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
    }
  }

  // HTTP Methods
  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.client.get(url, config);
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.client.post(url, data, config);
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.client.put(url, data, config);
  }

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.client.patch(url, data, config);
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.client.delete(url, config);
  }

  // Simplified file upload
  async uploadFile<T>(
    url: string,
    file: File,
    fieldName: string = "file",
    additionalData?: Record<string, string | number | boolean>
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append(fieldName, file);

    // Add additional data
    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
    }

    return this.client.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();
