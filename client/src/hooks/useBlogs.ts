/**
 * Blog Hooks - React hooks for blog operations
 */

import { useState, useEffect } from "react";
import { BlogService } from "../services";
import type { Blog, ApiError } from "../types";

// Hook for fetching all blogs
export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await BlogService.getBlogs();
      setBlogs(response.data);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    blogs,
    loading,
    error,
    refetch: fetchBlogs,
  };
};

// Hook for single blog by ID
export const useBlog = (id: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await BlogService.getBlog(id);
        setBlog(response.data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  return {
    blog,
    loading,
    error,
  };
};

// Hook for single blog by slug
export const useBlogBySlug = (slug: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const { blogs } = useBlogs();

  useEffect(() => {
    if (blogs.length > 0 && slug) {
      const foundBlog = blogs.find((b) => b.slug === slug);
      setBlog(foundBlog || null);
      setLoading(false);
      if (!foundBlog) {
        setError({ message: "Blog not found" } as ApiError);
      } else {
        setError(null);
      }
    }
  }, [blogs, slug]);

  return {
    blog,
    loading,
    error,
  };
};

// Hook for creating blogs
export const useCreateBlog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const createBlog = async (
    data: Parameters<typeof BlogService.createBlog>[0]
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await BlogService.createBlog(data);
      return response.data;
    } catch (err) {
      setError(err as ApiError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createBlog,
    loading,
    error,
  };
};
