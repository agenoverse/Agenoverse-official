/**
 * Events Hooks - React hooks for event operations
 */

import { useState, useEffect } from "react";
import { EventService } from "../services";
import type { Event, ApiError } from "../types";

// Hook for fetching all events
export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await EventService.getEvents();
      setEvents(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents,
  };
};

// Hook for upcoming events only
export const useUpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchUpcomingEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await EventService.getUpcomingEvents();
      setEvents(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpcomingEvents();
  }, []);

  return {
    events,
    loading,
    error,
    refetch: fetchUpcomingEvents,
  };
};

// Hook for past events only
export const usePastEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchPastEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await EventService.getPastEvents();
      setEvents(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPastEvents();
  }, []);

  return {
    events,
    loading,
    error,
    refetch: fetchPastEvents,
  };
};

// Hook for single event
export const useEvent = (id: string) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await EventService.getEvent(id);
        setEvent(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  return {
    event,
    loading,
    error,
  };
};

// Hook for creating events
export const useCreateEvent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const createEvent = async (
    data: Parameters<typeof EventService.createEvent>[0]
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await EventService.createEvent(data);
      return response.data;
    } catch (err) {
      setError(err as ApiError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createEvent,
    loading,
    error,
  };
};
