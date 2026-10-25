# 🚚 Fast-Shift — Parcel Delivery & Rider Management Platform

**Fast-Shift** is a full-stack web application designed to simplify parcel delivery by connecting senders, delivery riders, and administrators through a centralized platform.

The platform aims to make parcel management more convenient, improve delivery coordination, and provide a structured workflow for managing deliveries and riders.

<p align="center">
  <a href="https://fast-shift.vercel.app/">
    <strong>🌐 Live Website</strong>
  </a>
</p>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Live Deployment](#-live-deployment)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Security Notes](#-security-notes)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

## 📖 Overview

Fast-Shift is built around a parcel delivery workflow involving three primary user roles:

- **Senders:** Manage parcel delivery requests.
- **Riders:** Handle delivery tasks and manage their assigned work.
- **Administrators:** Oversee platform operations and manage delivery activities.

The project combines a React-based frontend with a Node.js and Express backend, Firebase services, and MongoDB to support a full-stack web application.

## ✨ Features

- 📦 **Parcel Management** — Designed to support parcel creation and delivery management.
- 🛵 **Rider Management** — Supports the platform's rider-management workflow.
- 🔐 **Authentication** — Firebase-based authentication integration.
- 🗄️ **Database Integration** — MongoDB integration through the backend.
- 🔄 **Client-Side Data Management** — React Query integration.
- 🗺️ **Map Integration** — Leaflet and React Leaflet for map-based features.
- 📱 **Responsive Interface** — Built with React and Tailwind CSS.
- 🧭 **Routing** — React Router for client-side navigation.
- 💳 **Payment Integration Preparation** — Stripe dependencies are included; payment functionality requires the relevant configuration and testing.

> Note: Feature availability depends on the current implementation and configuration of the deployed application.

## 🛠️ Technology Stack

### Frontend

- React 19
- Vite
- JavaScript
- Tailwind CSS
- DaisyUI
- React Router
- TanStack React Query
- Firebase SDK
- Leaflet
- React Leaflet
- Stripe.js integration dependencies

### Backend

- Node.js
- Express 5
- MongoDB
- Firebase Admin SDK
- Stripe SDK
- dotenv
- CORS

### Tools & Deployment

- Git and GitHub
- Visual Studio Code
- Vercel — Frontend deployment
- Render — Backend deployment
- MongoDB Atlas — Cloud database

## 📂 Project Structure

```text
Fast-Shift/
├── fast-shift-client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── ...
│   ├── .env.local
│   ├── package.json
│   └── vite.config.js
│
├── fast-shift-server/
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

*The structure above is representative. Folder names may vary slightly depending on the current implementation.*

## 🌐 Live Deployment

| Component | Platform | URL |
|---|---|---|
| Frontend | Vercel | [Open Fast-Shift](https://fast-shift.vercel.app/) |
| Backend | Render | [Backend service](https://fast-shift-server.onrender.com) |
| Database | MongoDB Atlas | Private connection |

The frontend and backend are deployed separately. The frontend must be configured to communicate with the deployed backend API.

## 🚀 Getting Started

Follow these steps to run Fast-Shift locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

You'll also need the appropriate Firebase and MongoDB configuration for the features you want to run.

### 1. Clone the Repository

```bash
git clone https://github.com/arponganapati7-byte/Fast-Shift.git
cd Fast-Shift
```

### 2. Set Up the Frontend

```bash
cd fast-shift-client
npm install
```

Create a `.env.local` file in the `fast-shift-client` directory and add your Firebase configuration.

### 3. Start the Frontend

```bash
npm run dev
```

Vite will display the local development URL in your terminal, typically `http://localhost:5173`.

### 4. Set Up the Backend

Open a second terminal from the repository root:

```bash
cd fast-shift-server
npm install
```

Create a `.env` file in the `fast-shift-server` directory and configure your backend environment variables.

### 5. Start the Backend

For development:

```bash
npm run dev
```

Alternatively, use:

```bash
npm start
```

The backend's default port and configuration depend on the server implementation.

## 🔑 Environment Variables

### Frontend — `fast-shift-client/.env.local`

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

If required by your implementation, configure the following variable for Stripe:

```env
VITE_PAYMENT_KEY=your_stripe_publishable_key
```

### Backend — `fast-shift-server/.env`

Configure the backend variables required by your server, such as:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Add any other required variables for Firebase Admin, Stripe, or the frontend API configuration according to the backend source code.

**Important:** These examples are templates, not a guarantee that every variable shown is required or that every possible variable has been listed. Check the source code to confirm the exact names your implementation expects.

## 📜 Available Scripts

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production frontend |
| `npm run preview` | Preview the production build locally |

### Backend

| Command | Description |
|---|---|
| `npm start` | Start the backend server |
| `npm run dev` | Start the backend using Nodemon |

## 🔒 Security Notes

- Never commit `.env`, `.env.local`, private API secrets, or Firebase Admin service-account credentials.
- Keep secret keys and database credentials on the backend.
- Use only Stripe publishable keys in frontend configuration; never expose Stripe secret keys in client-side code.
- Configure CORS to allow trusted frontend origins.
- Configure Firebase Authentication's authorized domains for the deployed website.
- Use environment variables in Vercel and Render for production configuration.

## 🛣️ Future Improvements

Potential improvements for the project include:

- [ ] Complete and verify the end-to-end parcel delivery workflow.
- [ ] Implement and test role-based access control.
- [ ] Add real-time delivery status updates.
- [ ] Complete Stripe payment integration and test payment flows.
- [ ] Improve form validation and error handling.
- [ ] Add automated tests for frontend and backend.
- [ ] Improve loading states, accessibility, and mobile responsiveness.
- [ ] Add structured logging and production monitoring.

## 👨‍💻 Author

**Arpon Ganapati**

Aspiring Full-Stack Web Developer passionate about building practical web applications and learning modern development technologies.

- **GitHub:** [@arponganapati7-byte](https://github.com/arponganapati7-byte)
- **Project Repository:** [Fast-Shift on GitHub](https://github.com/arponganapati7-byte/Fast-Shift)
- **Live Project:** [fast-shift.vercel.app](https://fast-shift.vercel.app/)

---

<p align="center">
  <strong>Built with ❤️ and a passion for learning web development.</strong>
</p>
