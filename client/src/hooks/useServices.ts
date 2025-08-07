/**
 * Services Hooks - React hooks for service operations
 */

import { useState, useEffect } from "react";
import { ServiceService } from "../services";
import type { Service, ApiError } from "../types";

// Hook for fetching all services
export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await ServiceService.getServices();
      setServices(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    services,
    loading,
    error,
    refetch: fetchServices,
  };
};

// Hook for single service
export const useService = (id: string) => {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await ServiceService.getService(id);
        setService(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

  return {
    service,
    loading,
    error,
  };
};

// Hook for creating services
export const useCreateService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const createService = async (
    data: Parameters<typeof ServiceService.createService>[0]
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await ServiceService.createService(data);
      return response.data;
    } catch (err) {
      setError(err as ApiError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createService,
    loading,
    error,
  };
};
