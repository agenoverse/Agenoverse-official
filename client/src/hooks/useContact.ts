/**
 * Contact Hooks - React hooks for contact operations
 */

import { useState, useEffect } from "react";
import { ContactService } from "../services";
import type { Contact, ApiError } from "../types";

// Hook for fetching all contacts
export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await ContactService.getContacts();
      setContacts(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return {
    contacts,
    loading,
    error,
    refetch: fetchContacts,
  };
};

// Hook for single contact
export const useContact = (id: string) => {
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await ContactService.getContact(id);
        setContact(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchContact();
    }
  }, [id]);

  return {
    contact,
    loading,
    error,
  };
};

// Hook for sending contact messages
export const useSendContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const sendContact = async (
    data: Parameters<typeof ContactService.sendContact>[0]
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await ContactService.sendContact(data);
      return response.data;
    } catch (err) {
      setError(err as ApiError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendContact,
    loading,
    error,
  };
};
