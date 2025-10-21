import { Router, Request, Response } from "express";
import multer, { StorageEngine, FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";

const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    const uploadPath: string = path.join("src", "uploads");
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

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
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const picRouter = Router();

const upload = multer({ storage, fileFilter });

picRouter.get("/", (req: Request, res: Response) => {
  res.send("Route Worked");
});

picRouter.post(
  "/upload",
  upload.single("image"),
  (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded or invalid file type.");
    }
    res.send(`File uploaded: ${req.file.filename}`);
  }
);

export default picRouter;
