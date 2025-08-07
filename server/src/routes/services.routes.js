import express from "express";
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from "../controllers/services.controller.js";

const router = express.Router();
import { upload } from "../middlewares/multer.middleware.js";

router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.post("/", upload.single("icon"), createService); // expects 'icon' field in form-data
router.patch("/:id", upload.single("icon"), updateService); // for updating service icon
router.delete("/:id", deleteService);

export default router;
