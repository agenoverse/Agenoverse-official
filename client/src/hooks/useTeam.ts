/**
 * Team Hooks - React hooks for team operations
 */

import { useState, useEffect } from "react";
import { TeamService } from "../services";
import type { TeamMember, ApiError } from "../types";

// Hook for fetching all team members
export const useTeam = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await TeamService.getTeamMembers();
      setTeam(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return {
    team,
    loading,
    error,
    refetch: fetchTeam,
  };
};

// Hook for single team member
export const useTeamMember = (id: string) => {
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await TeamService.getTeamMember(id);
        setMember(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMember();
    }
  }, [id]);

  return {
    member,
    loading,
    error,
  };
};

// Hook for team members by role
export const useTeamByRole = (role: string) => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchTeamByRole = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await TeamService.getTeamMembersByRole(role);
        setTeam(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (role) {
      fetchTeamByRole();
    }
  }, [role]);

  return {
    team,
    loading,
    error,
  };
};

// Hook for creating team members
export const useCreateTeamMember = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const createTeamMember = async (
    data: Parameters<typeof TeamService.createTeamMember>[0]
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await TeamService.createTeamMember(data);
      return response.data;
    } catch (err) {
      setError(err as ApiError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createTeamMember,
    loading,
    error,
  };
};
