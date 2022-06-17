import { allowedOrigins } from "./allowedOrigins.js";

export const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Request blocked by CORS policy"), false);
        }
    },
    optionsSuccessStatus: 200,
    // credentials: true,
};
