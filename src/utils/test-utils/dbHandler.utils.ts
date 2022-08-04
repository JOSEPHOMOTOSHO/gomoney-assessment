import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server"

const mongoServer = new MongoMemoryServer();

export const dbConnect = async () => {
    await mongoServer.start()
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
};

export const dbDisconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
};
