export const PORT = process.env.PORT || 5555;


// const mongoDBURL = "mongodb+srv://gautamatuag540_db_user:a7KRA6gmYowCiD2z@cluster0.cnlk4ps.mongodb.net/?book-store-db=Cluster0"

// Use environment variable for MongoDB URI in production
// For local development, fallback to local MongoDB
export const mongoDBURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/books-collection';