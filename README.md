# Book Management System API

This is a **Book Management System** API that allows for managing books, user authentication, and admin functionalities. The API is built using **Node.js**, **Express**, and **MongoDB**.

## Description

The **Library Management System** is designed to handle book records efficiently. It allows users to search, add, update, or delete ,fetch book details, while providing authentication for both regular users and admins. 
Admin users have elevated privileges to manage the system. 
The backend is powered by **Node.js** and **Express**, while **MongoDB** serves as the database to store book and user information. 

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
3. [Express.js]
4. [npm]
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

## API Endpoints

### Admin Routes

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| POST   | /api/admin/login   | Admin login                     |

#### Request Body (Admin Login):
```json
{
  "username": "admin",
  "password": "admin123"
}
```

---

### User Routes

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| POST   | /api/auth/register | Register a new user             |
| POST   | /api/auth/login    | User login                      |

#### Request Body (Register/Login):
```json
{
  "username": "user1",
  "password": "password123"
}
```

---

### Book Routes

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | /api/books         | Get all books (supports search) |
| GET    | /api/books/:id     | Get a single book by ID         |
| POST   | /api/books         | Add a new book (Admin only)     |
| PUT    | /api/books/:id     | Update a book (Admin only)      |
| DELETE | /api/books/:id     | Delete a book (Admin only)      |

#### Search Query Example:
```bash
GET /api/books?search=authorName
```

#### Book Example (Request Body for Add/Update):
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "published_date": "2024-06-01",
  "category": "Fiction",
  "status": "Available"
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

- [Postman]


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

