import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Service from "../models/service.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const getAllServices = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  res.status(200).json(new ApiResponse(200, services, "Fetched all services"));
});

export const getServiceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await Service.findById(id);
  if (!service) {
    throw new ApiError(404, "Service not found");
  }
  res.status(200).json(new ApiResponse(200, service, `Fetched service ${id}`));
});

export const createService = asyncHandler(async (req, res) => {
  const { title, description, link } = req.body;
  if (!title || !description) {
    throw new ApiError(400, "Title and description are required");
  }

  // Handle icon upload
  let icon = "";
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);
    icon = cloudinaryResult.secure_url;
  }

  const service = await Service.create({
    title,
    description,
    icon,
    link,
  });

  res
    .status(201)
    .json(new ApiResponse(201, service, "Service created successfully"));
});

export const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await Service.findById(id);
  if (!service) {
    throw new ApiError(404, "Service not found");
  }

  // Update only provided fields
  if (req.body.title) service.title = req.body.title;
  if (req.body.description) service.description = req.body.description;
  if (req.body.link) service.link = req.body.link;

  // Handle icon update
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);
    service.icon = cloudinaryResult.secure_url;
  }

  await service.save();
  res
    .status(200)
    .json(new ApiResponse(200, service, `Service ${id} updated successfully`));
});

export const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedService = await Service.findByIdAndDelete(id);

  if (!deletedService) {
    throw new ApiError(404, "Service not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, null, `Service ${id} deleted successfully`));
});
