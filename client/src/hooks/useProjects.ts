/**
 * API Hooks - Simple React hooks for API operations
 * Professional patterns used by Netflix, Airbnb, etc.
 */

import { useState, useEffect } from "react";
import { ProjectService } from "../services";
import type { Project, ApiError } from "../types";

// Hook for fetching projects
export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await ProjectService.getProjects();
      setProjects(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
  };
};

// Hook for single project
export const useProject = (id: string) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await ProjectService.getProject(id);
        setProject(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  return {
    project,
    loading,
    error,
  };
};

// Hook for creating projects
export const useCreateProject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const createProject = async (
    data: Parameters<typeof ProjectService.createProject>[0]
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await ProjectService.createProject(data);
      return response.data;
    } catch (err) {
      setError(err as ApiError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createProject,
    loading,
    error,
  };
};
