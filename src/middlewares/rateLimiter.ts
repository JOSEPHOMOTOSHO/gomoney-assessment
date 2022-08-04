import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 10 * 1000,
    max: 4
});


