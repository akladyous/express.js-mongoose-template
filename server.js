import path from "path";
import express from "express";
import morgran from 'morgan'
import { dbConnect } from "./config/dbConnect";
import { PORT } from "./config/env.js";
import {
    errorHandler,
    credentials,
    missingRoutes,
    handleCors,
} from "./middleware/middleware.js";
import routes from "./routes/index.js";

const app = express();
app.use(morgran('tiny'))
app.use(credentials);
app.use(handleCors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
routes(app)


app.use(missingRoutes);
app.use(errorHandler);
dbConnect((connection) => {
    if (connection instanceof Error){
        console.log('Error connecting to mongoDB : ', connection.message);
        process.exit(1)
    } else {
        connection.once('open', () => {
            console.log("\x1b[33m%s\x1b[0m", "mongoDB successfully connected");
        });
        app.listen(PORT, () => {
            console.log("\x1b[34m%s\x1b[0m", `ExpressJS is listening on port ${PORT}`);
        });
    }
});
