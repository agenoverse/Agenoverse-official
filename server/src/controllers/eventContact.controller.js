import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import EventContact from "../models/eventContact.models.js";

export const getAllEventContacts = asyncHandler(async (req, res) => {
  const eventContacts = await EventContact.find();
  res
    .status(200)
    .json(new ApiResponse(200, eventContacts, "Fetched all event contacts"));
});

export const getEventContactById = asyncHandler(async (req, res) => {
  const eventContact = await EventContact.findById(req.params.id);
  if (!eventContact) {
    throw new ApiError(404, "Event contact not found");
  }
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        eventContact,
        `Fetched event contact ${req.params.id}`
      )
    );
});

export const createEventContact = asyncHandler(async (req, res) => {
  const { name, email, phone, source, tags } = req.body;
  if (!email || !source) {
    throw new ApiError(400, "Email and source are required");
  }
  const eventContact = await EventContact.create({
    name,
    email,
    phone,
    source,
    tags: Array.isArray(tags) ? tags : tags ? [tags] : [],
  });
  res
    .status(201)
    .json(
      new ApiResponse(201, eventContact, "Event contact created successfully")
    );
});

export const updateEventContact = asyncHandler(async (req, res) => {
  const eventContact = await EventContact.findById(req.params.id);
  if (!eventContact) throw new ApiError(404, "Event contact not found");

  // Update only provided fields
  if (req.body.name) eventContact.name = req.body.name;
  if (req.body.email) eventContact.email = req.body.email;
  if (req.body.phone) eventContact.phone = req.body.phone;
  if (req.body.source) eventContact.source = req.body.source;
  if (req.body.tags)
    eventContact.tags = Array.isArray(req.body.tags)
      ? req.body.tags
      : [req.body.tags];

  await eventContact.save();
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        eventContact,
        `Event contact ${req.params.id} updated successfully`
      )
    );
});

export const deleteEventContact = asyncHandler(async (req, res) => {
  const deletedEventContact = await EventContact.findByIdAndDelete(
    req.params.id
  );

  if (!deletedEventContact) {
    throw new ApiError(404, "Event contact not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        deletedEventContact,
        `Event contact ${req.params.id} deleted successfully`
      )
    );
});
