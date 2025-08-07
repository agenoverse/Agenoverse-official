import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Blog from "../models/blog.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const getAllBlogs = asyncHandler(async (req, res) => {
  // Fetch all blogs and populate author details
  const blogs = await Blog.find().populate("author", "name image");
  if (!blogs || blogs.length === 0) throw new ApiError(404, "No blogs found");
  res.status(200).json(new ApiResponse(200, blogs, "Fetched all blogs"));
});

export const getBlogById = asyncHandler(async (req, res) => {
  // Fetch blog by ID and populate author details
  const blog = await Blog.findById(req.params.id).populate(
    "author",
    "name image"
  );
  if (!blog) throw new ApiError(404, "Blog not found");
  res
    .status(200)
    .json(new ApiResponse(200, blog, `Fetched blog ${req.params.id}`));
});

export const createBlog = asyncHandler(async (req, res) => {
  const { title, content, tags, "author.name": authorName } = req.body;
  if (!title || !content || !authorName) {
    throw new ApiError(400, "Title, content, and author name are required");
  }

  // Handle coverImage upload
  let coverImageUrl = "";
  if (req.files && req.files.coverImage) {
    const cloudinaryResult = await uploadOnCloudinary(
      req.files.coverImage[0].path
    );
    coverImageUrl = cloudinaryResult.secure_url;
  }

  // Handle author.photoUrl upload
  let authorPhotoUrl = "";
  if (req.files && req.files.photoUrl) {
    const cloudinaryResult = await uploadOnCloudinary(
      req.files.photoUrl[0].path
    );
    authorPhotoUrl = cloudinaryResult.secure_url;
  }

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");

  const newBlog = await Blog.create({
    title,
    slug,
    content,
    coverImage: coverImageUrl,
    tags: Array.isArray(tags) ? tags : [],
    author: {
      name: authorName,
      photoUrl: authorPhotoUrl,
    },
  });

  res.status(201).json(new ApiResponse(201, newBlog, "Blog created"));
});

export const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) throw new ApiError(404, "Blog not found");

  // Update only provided fields
  if (req.body.title) blog.title = req.body.title;
  if (req.body.content) blog.content = req.body.content;
  if (req.body.tags)
    blog.tags = Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags];

  // Author fields
  if (req.body["author.name"]) blog.author.name = req.body["author.name"];
  if (req.files && req.files.photoUrl) {
    const cloudinaryResult = await uploadOnCloudinary(
      req.files.photoUrl[0].path
    );
    blog.author.photoUrl = cloudinaryResult.secure_url;
  }

  // Cover image
  if (req.files && req.files.coverImage) {
    const cloudinaryResult = await uploadOnCloudinary(
      req.files.coverImage[0].path
    );
    blog.coverImage = cloudinaryResult.secure_url;
  }

  // Slug (if title updated)
  if (req.body.title) {
    blog.slug = req.body.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-+/g, "-");
  }

  await blog.save();
  res
    .status(200)
    .json(new ApiResponse(200, blog, `Blog ${req.params.id} updated`));
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, blog, `Blog ${req.params.id} deleted successfully`)
    );
});
