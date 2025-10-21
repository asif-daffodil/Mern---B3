import { Router, Request, Response } from 'express';
import { Task } from "../model/task";

const router = Router();
let tasks: Task[] = [];

router.post('/', (req: Request, res: Response) => {
    const { title, description } = req.body;
    const task: Task = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    }
    tasks.push(task);
    res.status(201).json(task);
});

router.get("/", (req: Request, res: Response) => {
    res.json(tasks);
})

export default router;