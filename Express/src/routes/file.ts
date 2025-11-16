import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path"

const fileRouter = Router();

fileRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello File");
})

fileRouter.post("/new", (req: Request, res: Response) => {
    const filePath = path.join(__dirname, "..", "utils", "myfile.txt");
    fs.writeFile(filePath, "Hello Wordld!", (err) => {
        if (err) console.log(err);
        else res.send("File created successfully");
    })
})

fileRouter.post("/add", (req: Request, res: Response) => {
    const filePath = path.join(__dirname, "..", "utils", "myfile.txt");
    const { text } = req.body;
    const newText = `\n${text}.`
    fs.appendFile(filePath, newText, err => {
        if (err) {
            res.status(500).send("Server Error");
        } else {
            res.status(202).send("New data added");
        }
    })
})

export default fileRouter;