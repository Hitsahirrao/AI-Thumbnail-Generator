import express from "express";
import { deleteThumbnail, generateThumbnail } from "../controllers/ThumbnailController.js";
import protect from "../middlewares/auth.js";

const ThumbnailRouter = express.Router();

ThumbnailRouter.post('/generate', protect, generateThumbnail)
ThumbnailRouter.delete('/detail/:id', protect, deleteThumbnail)
// Keep the legacy POST route working for any existing callers
ThumbnailRouter.post('/delete/:id', protect, deleteThumbnail)

export default ThumbnailRouter;
