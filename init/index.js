const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const { data: sampleListings } = require("../data.js"); // ✅ correct relative path

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("✅ MongoDB connection successful");
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("🗑️ Old listings removed");

    await Listing.insertMany(sampleListings);
    console.log("🌱 Database seeded with sample listings!");
  } catch (err) {
    console.log("❌ Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
};

initDB();
