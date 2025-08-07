import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogs.controller.js";

const router = express.Router();
import { upload } from "../middlewares/multer.middleware.js";

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post(
  "/",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "photoUrl", maxCount: 1 },
  ]),
  createBlog
); // expects 'coverImage' and 'photoUrl' fields in form-data
router.patch(
  "/:id",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "photoUrl", maxCount: 1 },
  ]),
  updateBlog
); // for updating blog cover image and author photo
router.delete("/:id", deleteBlog);

export default router;
