import express, { Request, Response, NextFunction } from 'express';
import router from './routes/tasks';
const app = express();

app.use(express.json());
app.use("/tasks", router)

app.get('/', (req: Request, res: Response) => {
    res.json({msg: "Hello World"});
});

app.post('/', (req: Request, res: Response) => {
    res.json({msg: "Post method"});
}); 

app.put('/', (req: Request, res: Response) => {
    res.json({msg: "Put method"});
}); 

app.listen("4000", ()=>{
    console.log(`Server is running at http://localhost:4000`);
})