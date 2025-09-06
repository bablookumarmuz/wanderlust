const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Connect to MongoDB
mongoose.connect(MONGO_URL, {})
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public"))); // For CSS/JS/images

// ================= ROUTES =================

// Root
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// INDEX - Show all listings
app.get("/listings", async (req, res) => {
  try {
    const listings = await Listing.find({});
    res.render("listings/index", { listings }); // pass 'listings' to EJS
  } catch (err) {
    console.log(err);
    res.send("Error loading listings");
  }
});

// NEW - Form to create new listing
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

// CREATE - Add new listing to DB
app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    res.send("Error creating listing");
  }
});

// SHOW - Show details of one listing
app.get("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
  } catch (err) {
    console.log(err);
    res.send("Listing not found");
  }
});

// EDIT - Form to edit a listing
app.get("/listings/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
  } catch (err) {
    console.log(err);
    res.send("Listing not found");
  }
});

// UPDATE - Update listing in DB
app.put("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.log(err);
    res.send("Error updating listing");
  }
});

// DELETE - Remove listing
app.delete("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    res.send("Error deleting listing");
  }
});

// Start server
app.listen(8080, () => {
  console.log("🌱 Server running on port 8080");
});
