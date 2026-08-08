import mongoose from "mongoose";

const connectDB = async () => {

    try {
        console.log("Trying MongoDB connection...");

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"ecommerce"
        });

        console.log("MongoDB Connected Successfully");

    } catch(error) {
        console.log("MongoDB Connection Failed:");
        console.log(error.message);
    }

}

export default connectDB;