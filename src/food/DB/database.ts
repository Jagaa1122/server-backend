import mongoose from "mongoose";
export const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || ""); /// 2 ene gants uildleer mongoostei holbogdno process.env.MONGO_URI || ""
    console.log("amjilttai holboloo");
  } catch (error) {
    console.log("holbolt amjiltgui", error);
  }
};
