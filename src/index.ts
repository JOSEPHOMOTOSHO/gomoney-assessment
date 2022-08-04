import 'dotenv/config';
import mongoose from 'mongoose';
import { logger } from './logger';
import { app } from './app';


const PORT = process.env.PORT!;

const url = process.env.MONGODB_URI!;

mongoose
  .connect(url)
  .then(() => logger.info('Database Connected'))
  .catch((error) => logger.error(error));

app.listen(PORT, () => {
  logger.info(`Started on port ${PORT}`);
});
