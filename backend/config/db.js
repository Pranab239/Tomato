import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('your_mongodb_key').then(()=>console.log("DB Connected"));
}
