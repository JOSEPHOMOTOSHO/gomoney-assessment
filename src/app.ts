import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes';
import { errorMiddleware } from './middlewares';
import session from 'express-session';
import connectRedis from 'connect-redis';
import redis from "redis";

let RedisStore = connectRedis(session);




export const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    auth_pass: process.env.REDIS_PASSWORD,
})



const app = express();

app.use(errorMiddleware);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.REDIS_SECRET ?? "",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 10
    }
}))


app.use('/api/v1', router);




export { app };
