import express, { Request, Response, NextFunction } from "express";
import router from "./routes/tasks";
import picRouter from "./routes/picture";
import fileRouter from "./routes/file";
import bodyParser, { urlencoded } from "body-parser";
const app = express();
import dotenv from "dotenv";
import { prisma } from "./prismaClient";
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/tasks", router);
app.use("/pic", picRouter);
app.use("/file", fileRouter)

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello World" });
});

app.post("/", (req: Request, res: Response) => {
  res.json({ msg: "Post method" });
});

app.put("/", (req: Request, res: Response) => {
  res.json({ msg: "Put method" });
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: { name, email, password }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen("4000", () => {
  console.log(`Server is running at http://localhost:4000`);
});
