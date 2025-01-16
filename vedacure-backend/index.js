import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from "./routes/medicine.js";

const app = express(); // Initialize Express app
dotenv.config(); // Load environment variables from a .env file (if available)

// Middleware setup
app.use(bodyParser.json({ limit: '30mb', extended: true })); // Parse JSON data, e.g., for handling image uploads
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })); // Parse URL-encoded data
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for cross-origin requests

// Define routes for the '/medicine' endpoint
app.use("/medicine", routes);

const CONNECTION_URL = process.env.CONNECTION_URL; // Get the MongoDB connection URL from environment variables
const PORT = process.env.PORT || 5000; // Set the server port (5000 if not specified in environment variables)

// Connect to the MongoDB database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // If the connection is successful, start the Express server
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    // If the connection is not successful, log the error
    console.log(error.message);
  });
