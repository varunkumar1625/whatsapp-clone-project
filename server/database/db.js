import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb://varunkumar1625:varun143vca@ac-bgfylln-shard-00-00.6ngnlho.mongodb.net:27017,ac-bgfylln-shard-00-01.6ngnlho.mongodb.net:27017,ac-bgfylln-shard-00-02.6ngnlho.mongodb.net:27017/?ssl=true&replicaSet=atlas-udb15k-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsapp-clone";

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to Database");
  }
};

export default Connection;
