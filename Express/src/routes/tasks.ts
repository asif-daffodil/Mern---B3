import { Router, Request, Response } from "express";
import { Task } from "../model/task";

const router = Router();
let tasks: Task[] = [];

router.post("/", (req: Request, res: Response) => {
  const { title, description } = req.body;
  const task: Task = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
  };
  tasks.push(task);
  res.status(201).json(task);
});

router.get("/", (req: Request, res: Response) => {
  res.json(tasks);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = +req.params.id;
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ msg: "Data not found" });
  }
  res.status(200).json(task);
});

router.put("/:id", (req: Request, res: Response) => {
  const id = +req.params.id;
  let task = tasks.find((t) => t.id == id)!;
  if (!task) res.status(404).json({ err: "Data not found" });
  const { title, description, completed } = req.body;
  task = { ...task, title, description, completed };
  res.json(task);
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = +req.params.id;
  tasks = tasks.filter((t) => t.id !== id);
  res.status(200).json({ msg: "data deleted successfully" });
});

export default router;
