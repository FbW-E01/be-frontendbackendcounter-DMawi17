import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

app.use(express.json());
app.use(cors());

let counter = 0;

app.get("/", (req, res) => {
    res.send({ counter: counter });
});

app.post("/", (req, res) => {
    res.send(`POST: ${counter++}`);
});
