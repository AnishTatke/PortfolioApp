import { MongoClient, Db } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://anishtatke:o1x7cZ4qvNlivLhx@onlycluster.ctznq.mongodb.net/?retryWrites=true&w=majority&appName=OnlyCluster";
const OPTIONS = {};

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export const connectToDB = async (): Promise<Db> => {
    if (cachedDb) {
        console.log("Using cached database instance");
        return cachedDb;
    }

    try {
        if (!cachedClient) {
            cachedClient = await MongoClient.connect(MONGODB_URI, OPTIONS);
            console.log("Connected to MongoDB");
        }
        cachedDb = cachedClient.db("myPortfolio");
        if (!cachedDb) {
            throw new Error("MongoDB database not found");
        }
        console.log("Database connected");
        return cachedDb;
    } catch (error) {
        console.error(error);
        throw new Error("Error connecting to MongoDB");
    }
};