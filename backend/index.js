import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Allow frontend URL from environment variable, or allow all origins in development
const allowedOrigins = process.env.FRONTEND_URL 
  ? process.env.FRONTEND_URL.split(',').map(url => url.trim())
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(
  cors({
    origin: function (origin, callback) {
      // In development, allow all origins
      if (process.env.NODE_ENV !== 'production') {
        return callback(null, true);
      }
      // In production, check if origin is in allowed list
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  })
);

app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Welcome To Book Store API',
    status: 'success',
    endpoints: {
      books: '/books',
      getAllBooks: 'GET /books',
      getBook: 'GET /books/:id',
      createBook: 'POST /books',
      updateBook: 'PUT /books/:id',
      deleteBook: 'DELETE /books/:id'
    }
  });
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('✅ App connected to database successfully');
    app.listen(PORT, () => {
      console.log(`🚀 App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Database connection error:');
    console.error('Error details:', error.message);
    if (error.message.includes('Invalid scheme')) {
      console.error('⚠️  MONGODB_URI appears to be invalid or empty');
      console.error('Please check your environment variables in Render dashboard');
    }
    process.exit(1); // Exit process on connection failure
  });
