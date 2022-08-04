import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 500 * 1000,
    max: 11000
});


