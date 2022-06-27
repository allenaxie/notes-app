import { MongoClient } from "mongodb";

async function dbConnect () {
    const client = await MongoClient.connect(process.env.MONGODB_CONNECTION);
    const db = client.db();
    console.log(`db: ${db}`);
}

export default dbConnect;