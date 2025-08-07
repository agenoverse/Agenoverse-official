/**
 * Blog Types for Agenoverse
 * Interfaces for blog-related data
 */

// Base Blog Interface (matches your backend model exactly)
export interface Blog {
  _id: string;
  title: string;
  slug: string; // Unique URL slug from backend
  content?: string; // Optional markdown content
  coverImage?: string; // Backend uses coverImage, not coverImageUrl
  tags: string[];
  author: BlogAuthor; // Nested author object
  createdAt: Date;
  // Note: backend only has createdAt, not updatedAt for blogs
}

// Blog Author Interface (matches backend nested structure)
export interface BlogAuthor {
  name: string;
  photoUrl?: string;
  // Note: backend only has name and photoUrl, not email or bio
}

// Create Blog Request (aligned with backend)
export interface CreateBlogRequest {
  title: string;
  slug?: string; // Auto-generated if not provided
  content?: string;
  coverImage?: string;
  tags?: string[];
  author: BlogAuthor;
}

// Update Blog Request
export type UpdateBlogRequest = Partial<CreateBlogRequest>;

// Blog with File Upload (separate interfaces to avoid conflicts)
export interface CreateBlogWithFileRequest {
  title: string;
  content: string;
  slug: string;
  author: {
    name: string;
    bio?: string;
    photoUrl?: string;
  };
  published?: boolean;
  tags?: string[];
  excerpt?: string;
  coverImageFile?: File; // File field separate from string field
  authorPhotoFile?: File; // File field separate from string field
}

export interface UpdateBlogWithFileRequest {
  title?: string;
  content?: string;
  slug?: string;
  author?: {
    name?: string;
    bio?: string;
    photoUrl?: string;
  };
  published?: boolean;
  tags?: string[];
  excerpt?: string;
  coverImageFile?: File; // File field separate from string field
  authorPhotoFile?: File; // File field separate from string field
}

// Blog Filters
export interface BlogFilters {
  published?: boolean;
  tags?: string[];
  author?: string;
  search?: string;
  dateRange?: {
    start?: Date;
    end?: Date;
  };
}

// Blog Sort Options
export type BlogSortField =
  | "title"
  | "publishedAt"
  | "createdAt"
  | "views"
  | "readTime";

export interface BlogSortOptions {
  field: BlogSortField;
  order: "asc" | "desc";
}

// Blog List Item (for summary views)
export interface BlogListItem {
  _id: string;
  title: string;
  summary: string;
  coverImageUrl?: string;
  author: Pick<BlogAuthor, "name" | "photoUrl">;
  tags: string[];
  publishedAt?: Date;
  readTime?: number;
  views?: number;
}

// Blog Detail View
export interface BlogDetail extends Blog {
  relatedBlogs?: BlogListItem[];
}

// Blog Stats
export interface BlogStats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  totalViews: number;
  averageReadTime: number;
  popularTags: Array<{
    tag: string;
    count: number;
  }>;
}
