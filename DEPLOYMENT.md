# Deployment Guide for Render

This guide will help you deploy your Book Store MERN Stack application to Render.

## Prerequisites

1. A GitHub account with your repository pushed
2. A Render account (sign up at https://render.com)
3. A MongoDB Atlas account (or use Render's MongoDB service)

## Step 1: Deploy Backend

1. Go to your Render dashboard
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the backend service:
   - **Name**: `book-store-backend` (or your preferred name)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or your preferred plan)

5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: Leave empty for now, we'll update it after frontend deployment

6. Click "Create Web Service"
7. Wait for deployment to complete
8. Copy your backend URL (e.g., `https://book-store-backend.onrender.com`)

## Step 2: Deploy Frontend

1. In Render dashboard, click "New +" and select "Web Service"
2. Connect the same GitHub repository
3. Configure the frontend service:
   - **Name**: `book-store-frontend` (or your preferred name)
   - **Root Directory**: `frontend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or your preferred plan)

4. Add Environment Variables:
   - `VITE_API_URL`: Your backend URL from Step 1 (e.g., `https://book-store-backend.onrender.com`)

5. Click "Create Web Service"
6. Wait for deployment to complete
7. Copy your frontend URL (e.g., `https://book-store-frontend.onrender.com`)

## Step 3: Update CORS Configuration

1. Go back to your backend service in Render
2. Navigate to "Environment" tab
3. Update the `FRONTEND_URL` environment variable with your frontend URL
4. Save changes (this will trigger a redeploy)

## Step 4: Test Your Deployment

1. Visit your frontend URL
2. Test all CRUD operations:
   - Create a book
   - View all books
   - Edit a book
   - Delete a book

## Alternative: Using render.yaml

If you prefer, you can use the `render.yaml` file included in this project:

1. In Render dashboard, click "New +" and select "Blueprint"
2. Connect your GitHub repository
3. Render will automatically detect `render.yaml` and create both services
4. You'll still need to set the environment variables in the Render dashboard:
   - `MONGODB_URI` for backend
   - `VITE_API_URL` for frontend (set after backend is deployed)
   - `FRONTEND_URL` for backend (set after frontend is deployed)

## Environment Variables Summary

### Backend
- `MONGODB_URI`: MongoDB connection string (required)
- `FRONTEND_URL`: Frontend URL for CORS (required after frontend deployment)
- `NODE_ENV`: Set to `production` (optional)
- `PORT`: Automatically set by Render (don't set manually)

### Frontend
- `VITE_API_URL`: Backend API URL (required)
- `PORT`: Automatically set by Render (don't set manually)

## Troubleshooting

### Backend Issues
- **Connection refused**: Check if `MONGODB_URI` is set correctly
- **CORS errors**: Ensure `FRONTEND_URL` matches your frontend URL exactly
- **Port errors**: Don't set `PORT` manually, Render handles this

### Frontend Issues
- **API calls failing**: Verify `VITE_API_URL` is set correctly
- **Build errors**: Check that all dependencies are in `package.json`
- **404 errors**: Ensure the build completed successfully

## Notes

- Free tier services on Render spin down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds
- Consider upgrading to a paid plan for always-on services

