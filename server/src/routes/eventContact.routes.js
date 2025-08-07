import express from "express";
import {
  getAllEventContacts,
  getEventContactById,
  createEventContact,
  updateEventContact,
  deleteEventContact,
} from "../controllers/eventContact.controller.js";

const router = express.Router();

router.get("/", getAllEventContacts);
router.get("/:id", getEventContactById);
router.post("/", createEventContact);
router.patch("/:id", updateEventContact);
router.delete("/:id", deleteEventContact);

export default router;
