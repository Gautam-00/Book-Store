# 📚 Book Store - MERN Stack Application

A full-stack web application for managing books built with the MERN (MongoDB, Express, React, Node.js) stack. This application provides a complete CRUD (Create, Read, Update, Delete) interface for managing a book collection.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![License](https://img.shields.io/badge/License-ISC-blue)

## ✨ Features

- 📖 **View All Books** - Display books in both table and card views
- ➕ **Create Books** - Add new books with title, author, and publish year
- ✏️ **Edit Books** - Update existing book information
- 🗑️ **Delete Books** - Remove books from the collection
- 🔍 **Book Details** - View detailed information about each book
- 🎨 **Modern UI** - Beautiful and responsive design with Tailwind CSS
- 🔔 **User Feedback** - Toast notifications for all operations
- ⚡ **Fast Performance** - Built with Vite for optimal development experience

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Notistack** - Snackbar notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Gautam-00/Book-Store.git
cd Book-Store
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env file with your MongoDB connection string
# MONGODB_URI=your_mongodb_connection_string
# PORT=5555
# FRONTEND_URL=http://localhost:5173
# NODE_ENV=development

# Start the backend server
npm start

# For development with auto-reload
npm run dev
```

The backend server will run on `http://localhost:5555`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env file with your backend URL
# VITE_API_URL=http://localhost:5555

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 4. Access the Application

Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
Book-Store-MERN-Stack/
├── backend/
│   ├── config.js              # Configuration (PORT, MongoDB URL)
│   ├── index.js              # Express server setup
│   ├── models/
│   │   └── bookModel.js      # Book Mongoose model
│   ├── routes/
│   │   └── booksRoute.js     # Book CRUD routes
│   ├── package.json
│   └── .env.example          # Environment variables template
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── config/
│   │   │   └── api.js         # API configuration
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── public/               # Static assets
│   ├── package.json
│   └── .env.example          # Environment variables template
│
├── render.yaml               # Render deployment configuration
├── DEPLOYMENT.md             # Detailed deployment guide
└── README.md                 # This file
```

## 🔧 Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/books-collection` |
| `PORT` | Server port | `5555` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Frontend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5555` |

**Note:** The `VITE_` prefix is required for Vite to expose environment variables to the client.

## 🌐 API Endpoints

### Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/books` | Get all books |
| `GET` | `/books/:id` | Get a single book by ID |
| `POST` | `/books` | Create a new book |
| `PUT` | `/books/:id` | Update a book |
| `DELETE` | `/books/:id` | Delete a book |

### Request/Response Examples

**Create Book (POST /books)**
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishYear": 1925
}
```

**Get All Books (GET /books)**
```json
{
  "count": 2,
  "data": [
    {
      "_id": "...",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publishYear": 1925,
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

## 🚀 Deployment

This application is configured for deployment on [Render](https://render.com). See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deployment Steps:

1. **Push to GitHub** - Ensure your code is pushed to your repository
2. **Deploy Backend** - Create a new Web Service on Render pointing to the `backend` directory
3. **Deploy Frontend** - Create a new Web Service on Render pointing to the `frontend` directory
4. **Set Environment Variables** - Use the `.env.example` files as a reference
5. **Update CORS** - Set `FRONTEND_URL` in backend after frontend is deployed

For more details, refer to the [Deployment Guide](./DEPLOYMENT.md).

## 🧪 Development

### Running in Development Mode

**Backend:**
```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

**Frontend:**
```bash
cd frontend
npm run dev  # Vite dev server with HMR
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build  # Creates optimized production build in dist/
npm run preview  # Preview the production build locally
```

## 📝 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Gautam**

- GitHub: [@Gautam-00](https://github.com/Gautam-00)

## 🙏 Acknowledgments

- Built as part of a MERN stack tutorial
- Inspired by modern full-stack development practices
- Thanks to the open-source community for amazing tools and libraries

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

⭐ If you found this project helpful, please give it a star!

