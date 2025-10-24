// src/routes/picRoute.ts

import { Router, Request, Response } from "express";
import multer, { StorageEngine, FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";

// Create upload folder automatically
const uploadPath = path.join("src", "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Storage configuration
const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Allowed file types
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/jpg",
    "image/webp",
    "image/bmp",
  ];
  allowedTypes.includes(file.mimetype)
    ? cb(null, true)
    : cb(new Error("Invalid file type"));
};

// Upload middleware with limits
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // ✅ 2 MB limit
  },
});

// Router initialization
const picRouter = Router();

// Test route
picRouter.get("/", (req: Request, res: Response) => {
  res.send("Picture Upload Route Working ✅");
});

// Upload route
picRouter.post(
  "/upload",
  upload.single("image"),
  (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File not uploaded or invalid type",
      });
    }

    return res.json({
      success: true,
      message: "File uploaded successfully!",
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
      size: req.file.size,
      mimeType: req.file.mimetype,
    });
  }
);

// Error Handling Middleware
picRouter.use(
  (err: Error, req: Request, res: Response, next: Function) => {
    console.error(err.message);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
);

export default picRouter;
