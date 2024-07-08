
// Load environment variables from .env file
require('dotenv').config();

// Export the variables
exports.MONGODB_URI = process.env.MONGODB_URI;
exports.APP_KEY = process.env.APP_KEY;

// exports.MONGODB_URI = "mongodb+srv://samuelayo61:WgedcnTOTAXmfAwE@cluster0.mfvx2vv.mongodb.net/db_post"; 
// exports.APP_KEY = "app_sceret_to_encrypt_jwt"; 