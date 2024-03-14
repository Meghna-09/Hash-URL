
# Hash URL 

This project aims to provide a URL hashing system for marketing departments dealing with long URLs containing UTM tracking parameters. The system allows for easy creation of hashed URLs with click tracking, ensuring privacy-aware hashed URLs that are resistant to formatting issues when shared across platforms. The backend is built with Node.js and Express.js for API endpoints, while the frontend is built with React.js for the user interface. MongoDB is used as the database for storing hashed URLs and their associated original URLs.


## Architecture
The architecture of this project follows a typical MERN (MongoDB, Express.js, React.js, Node.js) stack design:

- #### Frontend (React.js):
  - The frontend provides a user interface for users to input long URLs and generate hashed URLs.
   - React components handle the user interactions and display the hashed URLs.
   - Environment variables are used to configure the frontend, such as the API endpoint URL.

- #### Backend (Node.js/Express.js):
  - The backend serves as the API server, handling requests from the frontend.
   - Express.js is used to create RESTful API endpoints for generating hashed URLs and redirecting to original URLs.
   - MongoDB is used to store hashed URLs and their associated original URLs.
   - Environment variables are used to configure the backend, such as the MongoDB connection URI.
## Installation and Setup

###### Prerequisites
- Node.js installed on your machine
- MongoDB installed locally or accessible online
- Git installed on your machine

###### Clone the Repository
- Clone the repository:
   ```bash
   git clone https://github.com/Meghna-09/Hash-URL-.git
   ```

###### Frontend Setup
- Navigate to the frontend directory:
  ```bash
  cd Hash-URL/frontend
   ```
- Install frontend dependencies:
  ```bash
  npm install
   ```
- Create a .env file in the frontend directory with the following content:
  ```bash
  REACT_APP_API_URL=REACT_APP_LOCAL_HOST_PORT=http://localhost:8000/api/urls
   ```
Replace http://localhost:8000/api with the URL where your backend API will be running locally.
- Start the frontend development server:
 ```bash
  npm start
   ```
- The frontend will be running at http://localhost:3000.

###### Backend Setup
- Navigate to the frontend directory:
  ```bash
  cd Hash-URL/backend
   ```
- Install backend dependencies:
  ```bash
  npm install
   ```
- Create a .env file in the frontend directory with the following content:
  ```bash
  mongodb_connection_url=your_mongodb_database_connection_string
   ```
- Start the backend development server:
 ```bash
  npm start
   ```
- The backend will be running at `http://localhost:8000`

## Deployment

- Open [Vercel](https://vercel.com) in your web browser.
- Sign in using your GitHub account by selecting `continue with GitHub`.
- Click on **Add New** and choose **Project**.
- Select the repository for deployment by clicking on the appropriate repository.
- Once the repository is selected, click on **Import** to proceed.
- Choose the appropriate **Framework** for the frontend (e.g., React.js).
- Click on **Edit** to configure the deployment settings.
  - Choose the folder to deploy
  - Set the appropriate **Environment Variables**
      (For example to deploy **Frontend**):

      - **REACT_APP_API_URL**: Set this to the URL of your backend API.
   - Configure other settings as needed.
- Once everything is configured, click on Deploy to start the deployment process. 
- Vercel will build and deploy your  application, providing you with a URL to access the deployed app.


## Accessing Deployed Apps

- Once the deployment is successful, Vercel will provide you with URLs to access your deployed frontend and backend apps.
- Visit the provided URLs to access your deployed applications:
  - Frontend App: URL for the frontend application.
  - Backend API: URL for the backend API (if deployed separately).
- You can now use the deployed apps as needed, such as generating hashed URLs and testing the functionality.
## Testing

- You can use tools like Postman or curl to send requests to the deployed backend API endpoints for testing.
- Ensure that the backend server is running and accessible by the frontend.

## Deployed url for Frontend

 [frontend](https://hash-url.vercel.app)

## Deployed url for Backend

 [backend](https://hash-url-server.vercel.app)