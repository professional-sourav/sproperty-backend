import express from "express";
import dotenv from "dotenv";
import {appRouter} from "./routes";
import {dbConnect} from "../config/db";
import bodyParser from "body-parser";

dotenv.config();

const app = express()
const port = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(appRouter)

dbConnect().then(() => {
    console.log("DB Connected");
})

app.listen(port, () => {
    console.log("Server running on port: " + port);
})
