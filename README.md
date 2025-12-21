# 🧑‍💻 Collaborative Task Manager

A full‑stack collaborative task management application built as part of a full‑stack engineering assessment. The project focuses on **authentication, real‑time collaboration, clean architecture, and modern frontend data management**.

---

## 🚀 Live Demo

* **Frontend (Vercel):** https://task-manager-sable-six.vercel.app/
* **Backend API (Render):** https://task-manager-x5t2.onrender.com
---
Two Users are seeded in Database for testing purpose
User1
email: user1@gmail.com
password: pass1
User2
email: user2@gmail.com
password: pass2

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* TypeScript
* Tailwind CSS
* Axios
* TanStack React Query
* Socket.io Client
* React Hook Form + Zod

### Backend

* Node.js
* Express (TypeScript)
* MongoDB
* Mongoose ODM
* JWT Authentication (HttpOnly Cookies)
* Socket.io

### Deployment

* Frontend: **Vercel**
* Backend & DB: **Render**

---

## ✅ Features Implemented

### 🔐 Authentication & Authorization

* User registration and login
* Password hashing using bcrypt
* JWT‑based authentication stored in **HttpOnly cookies**
* Protected routes using authentication middleware
* Authenticated Socket.IO connections using JWT

---

### 📋 Task Management (Partial)

* Create tasks
* Fetch and display tasks in frontend
* Tasks include:

  * Title
  * Description
  * Due date
  * Priority
  * Status
  * Creator
  * Assigned user

---

### 🔄 Real‑Time Collaboration (Socket.IO)

* Socket.IO initialized on top of HTTP server
* Socket authentication using JWT (`io.use` middleware)
* Each user joins a **user‑specific room (userId)**
* Real‑time updates:

  * When a task is assigned to a user, they receive instant updates
  * Assigned user sees the task appear without refreshing
* Socket events update **React Query cache directly** (no refetch spam)

---

### 🧠 Frontend Data Management

* Server state handled using **TanStack React Query**
* API logic separated from UI components
* Automatic cache updates on real‑time socket events
* Skeleton loaders & loading states
* Dark‑themed responsive UI using Tailwind CSS

---

## 🧩 Architecture Overview

### Backend Architecture

```
controllers/   → Handle HTTP requests
services/      → Business logic
models/        → Mongoose schemas
routes/        → Express routes
middlewares/   → Auth & validation
socket/        → Socket.IO setup & events
```

* Clear separation of concerns
* JWT authentication for both REST and Socket.IO
* Centralized error handling

### Frontend Architecture

```
api/           → Axios API functions
hooks/         → React Query hooks
lib/           → Socket & QueryClient singletons
components/    → UI components
pages/         → Route‑level pages
```

---

## 🔌 Socket.IO Integration (Explanation)

* Socket.IO server is attached to the HTTP server
* JWT is verified during socket handshake
* On successful connection:

  * Socket joins a room named after the userId
* Enables:

  * Targeted notifications
  * Scalable real‑time updates

Example:

```ts
socket.join(userId)
io.to(userId).emit("task:assigned", task)
```

---

## 🚧 Features In Progress / Pending

The following features are **planned and will be added**:

* ⏳ Task update API
* ⏳ Task delete API
* ⏳ Filtering by status & priority (frontend)
* ⏳ Sorting by due date
* ⏳ Optimistic UI for task updates
* ⏳ Audit logging (bonus)
* ⏳ Dockerization (bonus)

---

## 🧠 Design Decisions & Trade‑offs

* **MongoDB** chosen for faster iteration and schema flexibility
* JWT stored in HttpOnly cookies for better security
* React Query used instead of manual state management
* Socket events directly mutate React Query cache instead of refetching
* Some features deferred due to time constraints but architecture supports easy extension

---

## ⚙️ Local Setup Instructions

### Backend

```bash
cd Backend/task-manager-server
npm install
npm run dev
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
FRONTEND_URL=http://localhost:5173
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🏁 Final Note

Due to time constraints and parallel commitments, the project currently represents **partial completion** of the assignment. However, the core architecture, authentication, real‑time collaboration, and data flow are fully implemented following production‑grade practices.

This project will continue to be enhanced and is suitable for long‑term portfolio use.

---

✨ Thank you for reviewing this project.
