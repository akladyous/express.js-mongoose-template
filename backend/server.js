import path from 'path';
import express from "express";
import mongoose from "mongoose";
import { dbConnect } from './config/dbConnect'
import { PORT } from './config/env.js'
import {
    errorHandler,
    credentials,
    logger,
    missingRoutes,
    handleCors
} from "./middleware/middleware.js";

const app = express();
app.use(logger);
app.use(credentials);
app.use(handleCors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));









app.use(missingRoutes);
app.use(errorHandler);
mongoose.connection.once("open", () => {
    console.log("\x1b[33m%s\x1b[0m", "mongoDB successfully connected");
    app.listen(PORT, () => {
        console.log(
            "\x1b[34m%s\x1b[0m",
            `ExpressJS is listening on port ${PORT}`
        );
    });
});
