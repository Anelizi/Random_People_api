import express from "express";
import { json } from "express";
import randomPeopleRouter from "routes/random-routes";

const app = express();
app.use(json());
app.use(randomPeopleRouter)

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Serve is up and running on port ${port}`);
})