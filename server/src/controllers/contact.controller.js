import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Contact from "../models/contact.models.js";

export const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find()
    .sort({ createdAt: -1 })
    .select("-__v -createdAt -updatedAt");
  if (!contacts) throw new ApiError(404, "No contacts found");
  res.status(200).json(new ApiResponse(200, contacts, "Fetched all contacts"));
});

export const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).select(
    "-__v -createdAt -updatedAt"
  );
  if (!contact) throw new ApiError(404, "Contact not found");

  res
    .status(200)
    .json(new ApiResponse(200, contact, `Fetched contact ${req.params.id}`));
});

export const createContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    throw new ApiError(400, "Name, email, and message are required");
  }
  const newContact = await Contact.create({
    name,
    email,
    message,
  });

  res.status(201).json(new ApiResponse(201, newContact, "Contact created"));
});

export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) throw new ApiError(404, "Contact not found");

  // Update only provided fields
  if (req.body.name) contact.name = req.body.name;
  if (req.body.email) contact.email = req.body.email;
  if (req.body.message) contact.message = req.body.message;

  await contact.save();
  res
    .status(200)
    .json(new ApiResponse(200, contact, `Contact ${req.params.id} updated`));
});

export const deleteContact = asyncHandler(async (req, res) => {
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);

  if (!deletedContact) {
    throw new ApiError(404, "Contact not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, deleteContact, `Contact ${req.params.id} deleted`)
    );
});
