/**
 * Journey Hooks - React hooks for journey operations
 */

import { useState, useEffect } from "react";
import { JourneyService } from "../services";
import type { Journey, ApiError } from "../types";

// Hook for fetching all journey items
export const useJourney = () => {
  const [journey, setJourney] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchJourney = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await JourneyService.getJourneyEntries();
      setJourney(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJourney();
  }, []);

  return {
    journey,
    loading,
    error,
    refetch: fetchJourney,
  };
};

// Hook for journey items by year
export const useJourneyByYear = (year: number) => {
  const [journey, setJourney] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchJourneyByYear = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await JourneyService.getJourneyByYear(year);
        setJourney(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (year) {
      fetchJourneyByYear();
    }
  }, [year]);

  return {
    journey,
    loading,
    error,
  };
};

// Hook for single journey item
export const useJourneyItem = (id: string) => {
  const [journeyItem, setJourneyItem] = useState<Journey | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchJourneyItem = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await JourneyService.getJourneyEntry(id);
        setJourneyItem(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJourneyItem();
    }
  }, [id]);

  return {
    journeyItem,
    loading,
    error,
  };
};

// Hook for creating journey items
export const useCreateJourneyItem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const createJourneyEntry = async (
    data: Parameters<typeof JourneyService.createJourneyEntry>[0]
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await JourneyService.createJourneyEntry(data);
      return response.data;
    } catch (err) {
      setError(err as ApiError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createJourneyEntry,
    loading,
    error,
  };
};
