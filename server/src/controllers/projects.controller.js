import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Project from "../models/project.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(new ApiResponse(200, projects, "Fetched all projects"));
});

export const getProjectById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  res.status(200).json(new ApiResponse(200, project, `Fetched project ${id}`));
});
export const createProject = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    content,
    techStack,
    liveUrl,
    githubUrl,
    category,
  } = req.body;
  if (!title || !description || !category) {
    throw new ApiError(400, "Title, description, and category are required");
  }

  // Handle image upload
  let imageUrl = "";
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);
    imageUrl = cloudinaryResult.secure_url;
  }

  const project = await Project.create({
    title,
    content,
    description,
    techStack,
    imageUrl,
    liveUrl,
    githubUrl,
    category,
  });

  res
    .status(201)
    .json(new ApiResponse(201, project, "Project created successfully"));
});

export const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  // Update only provided fields
  if (req.body.title) project.title = req.body.title;
  if (req.body.description) project.description = req.body.description;
  if (req.body.content) project.content = req.body.content;
  if (req.body.techStack) project.techStack = req.body.techStack;
  if (req.body.liveUrl) project.liveUrl = req.body.liveUrl;
  if (req.body.githubUrl) project.githubUrl = req.body.githubUrl;
  if (req.body.category) project.category = req.body.category;

  // Handle image update
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);
    project.imageUrl = cloudinaryResult.secure_url;
  }

  await project.save();
  res
    .status(200)
    .json(new ApiResponse(200, project, `Project ${id} updated successfully`));
});

export const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedProject = await Project.findByIdAndDelete(id);

  if (!deletedProject) {
    throw new ApiError(404, "Project not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, deletedProject, `Project ${id} deleted successfully`)
    );
});
