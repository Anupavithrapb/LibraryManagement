# Book Management System API

This is a **Book Management System** API that allows for managing books, user authentication, and admin functionalities. The API is built using **Node.js**, **Express**, and **MongoDB**.

## Description

The **Library Management System** is designed to handle book records efficiently. It allows users to fetch,search, add, update, or delete book details, while providing authentication for both regular users and admins. Admin users have elevated privileges to manage the system. The backend is powered by **Node.js** and **Express**, while **MongoDB** serves as the database to store book and user information. 

Testing of the API is performed using **Postman**.

You can view the project source code on GitHub: [Library Management System](https://github.com/Anupavithrapb/LibraryManagement.git)

## Features

- **Admin Authentication**
- **User Registration & Login**
- **CRUD Operations for Books**
- **JWT-Based Authentication**
- **Admin Role-Based Access Control**
- **Search for Books by Title or Author**

## Prerequisites

Ensure you have the following installed:

1. [Node.js]
2. [MongoDB]
3. [npm]
---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Anupavithrapb/LibraryManagement.git
cd LibraryManagement
```

### 2. Install Dependencies

Run the following command to install all project dependencies:

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=mongodb://localhost:27017/swtych
JWT_SECRET=swtych@123
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

- Replace `MONGO_URI` with your MongoDB connection string.
- Update `JWT_SECRET` with a strong secret key.
- Change `ADMIN_USERNAME` and `ADMIN_PASSWORD` for admin login.

### 4. Start MongoDB

Ensure MongoDB is running locally or connect to your MongoDB cloud instance.

### 5. Run the Server

To start the development server, run:

```bash
npm start
```

The server will run on `http://localhost:5000` (default port).

---

## API Documentation

### Admin Routes

#### 1. Admin Login
**Endpoint:** `POST /api/admin/login`

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response:**
```json
{
  "message": "Admin login successful",
  "token": "<JWT Token>"
}
```

---

### User Routes

#### 2. User Registration
**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "username": "user1",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "123456789",
    "username": "user1"
  }
}
```

#### 3. User Login
**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "username": "user1",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "<JWT Token>"
}
```

---

### Book Routes

#### 4. Get All Books (with Search)
**Endpoint:** `GET /api/books`

**Query Parameters:**
- `search` (optional): Search keyword for book title or author.

**Request Example:**
```bash
GET /api/books?search=authorName
```

**Response:**
```json
{
  "books": [
    {
      "_id": "12345",
      "title": "Book Title",
      "author": "Author Name",
      "published_date": "2024-06-01",
      "category": "Fiction",
      "status": "Available"
    }
  ],
  "totalBooks": 1
}
```

---

#### 5. Get Book by ID
**Endpoint:** `GET /api/books/:id`

**Request Example:**
```bash
GET /api/books/12345
```

**Response:**
```json
{
  "_id": "12345",
  "title": "Book Title",
  "author": "Author Name",
  "published_date": "2024-06-01",
  "category": "Fiction",
  "status": "Available"
}
```

---

#### 6. Add a New Book (Admin Only)
**Endpoint:** `POST /api/books`

**Headers:**
```
Authorization: Bearer <JWT Token>
```

**Request Body:**
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "published_date": "2024-06-01",
  "category": "Fiction",
  "status": "Available"
}
```

**Response:**
```json
{
  "message": "Book added successfully",
  "book": {
    "_id": "67890",
    "title": "Book Title",
    "author": "Author Name",
    "published_date": "2024-06-01",
    "category": "Fiction",
    "status": "Available"
  }
}
```

---

#### 7. Update a Book (Admin Only)
**Endpoint:** `PUT /api/books/:id`

**Headers:**
```
Authorization: Bearer <JWT Token>
```

**Request Body:**
```json
{
  "title": "Updated Title",
  "status": "Unavailable"
}
```

**Response:**
```json
{
  "message": "Book updated successfully",
  "book": {
    "_id": "12345",
    "title": "Updated Title",
    "author": "Author Name",
    "published_date": "2024-06-01",
    "category": "Fiction",
    "status": "Unavailable"
  }
}
```

---

#### 8. Delete a Book (Admin Only)
**Endpoint:** `DELETE /api/books/:id`

**Headers:**
```
Authorization: Bearer <JWT Token>
```

**Request Example:**
```bash
DELETE /api/books/12345
```

**Response:**
```json
{
  "message": "Book deleted successfully",
  "book": {
    "_id": "12345",
    "title": "Book Title"
  }
}
```

---

## Authentication and Authorization

- **JWT Authentication** is used to protect endpoints.
- Use the `Authorization` header with the following format:

```
Authorization: Bearer <token>
```

- Admin routes require a valid admin token with `isAdmin` set to `true`.

---

## Testing the API

You can test the API using tools like:

- [Postman](https://www.postman.com/)


---

## Folder Structure

```
project-folder/
├── Controller/          # API controllers
│   ├── Admincontroller.js
│   ├── Bookcontroller.js
│   └── Usercontroller.js
├── Middleware/          # Authentication middlewares
│   ├── index.js         # Token verification
│   └── admin.js         # Admin role verification
├── Models/              # Mongoose models
│   ├── Bookmodel.js
│   └── Usermodel.js
├── Routes/              # API routes
│   ├── Adminroute.js
│   ├── Bookroute.js
│   └── Userroute.js
├── .env                 # Environment variables
├── server.js            # Entry point for the app
├── package.json         # Dependencies and scripts
└── README.md            # Documentation
```

---

## Running in Production

1. Use a process manager like **PM2** to run the server:
   ```bash
   npm install -g pm2
   pm2 start server.js
   ```
2. Configure environment variables for production.
3. Connect to a cloud MongoDB instance for better scalability.

---

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT-based authentication
- **dotenv** - Environment variables

---

## Author

Developed by **[Anupavithra P B]**. Contributions are welcome!

---

## GitHub Repository

For the complete source code, visit the project on GitHub: [Library Management System](https://github.com/Anupavithrapb/LibraryManagement.git)


