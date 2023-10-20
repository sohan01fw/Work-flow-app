import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const connUri = process.env.NEXT_PUBLIC_MONGODB_URI || "";
const client = new MongoClient(connUri);
export async function ConnToDb() {
  if (!connUri) {
    throw new Error("connection uri not available");
  }
  try {
    await mongoose.connect(connUri);
    console.log("successfully connect to db");
  } catch (error) {
    console.log(error);
  }
}
