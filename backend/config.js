export const PORT = process.env.PORT || 5555;

// Use environment variable for MongoDB URI in production
// For local development, fallback to local MongoDB
const mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/books-collection';

// Validate MongoDB URI format
if (!mongoDBURI || (!mongoDBURI.startsWith('mongodb://') && !mongoDBURI.startsWith('mongodb+srv://'))) {
  console.error('❌ Invalid MongoDB URI. Must start with "mongodb://" or "mongodb+srv://"');
  console.error('Current MONGODB_URI value:', mongoDBURI ? `"${mongoDBURI.substring(0, 20)}..."` : 'undefined or empty');
  if (process.env.NODE_ENV === 'production') {
    throw new Error('MONGODB_URI environment variable is required and must be a valid MongoDB connection string');
  }
}

export const mongoDBURL = mongoDBURI.trim();