# Career Trigger Client

# Modern web application for a professional career community

# Built with Next.js and Tailwind CSS

# =========================================================

# 1. Architecture & Principles

# =========================================================

# - Modular Components (Single Responsibility Principle)

# - KISS (Keep It Simple, Stupid)

# - YAGNI (You Ain't Gonna Need It)

# - DRY (Don't Repeat Yourself)

# - Composition over Inheritance

# - Separation of Concerns (UI vs Business Logic)

# =========================================================

# 2. Tech Stack

# =========================================================

# Framework: React.js / Next.js

# Styling: Tailwind CSS

# State Management: Redux Toolkit / Context API

# Data Fetching: RTK Query / Axios

# Form Handling: React Hook Form + Zod

# UI & Icons: React Icons, ShadCn

# =========================================================

# 3. Features

# =========================================================

# - Role-based dashboards (Admin, Editor, User)

# - Interactive feed for career posts

# - JWT authentication with persistent sessions

# - Post creation editor with validation

# - Responsive design (Mobile, Tablet, Desktop)

# - Optimistic UI updates for likes/comments

# =========================================================

# 4. Security & Optimization

# =========================================================

# - Protected routes with HOCs & middleware

# - Secure JWT handling (memory / HttpOnly cookies)

# - Lazy loading & code splitting

# - Input sanitization against XSS

# =========================================================

# 5. Project Structure

# =========================================================

career-trigger-client/
│
├─ public/
│ ├─ images/ icons/ favicon.ico
│
├─ src/
│ ├─ app/ (pages & layouts)
│ ├─ components/ (UI components)
│ ├─ features/ (API + hooks)
│ ├─ types/
│ ├─ utils/
│ ├─ styles/
│
├─ .env.local
├─ next.config.js
├─ package.json
└─ tsconfig.json

# =========================================================

# 6. Setup Instructions

# =========================================================

# Step 1: Clone repository

git clone https://github.com/mdabarik/career-trigger-client.git
cd career-trigger-client

# Step 2: Install dependencies

npm install

# Step 3: Add environment variables (.env.local)

JWT_SECRET=
JWT_REFRESH_SECRET=

# Step 4: Run project

npm run dev # Development mode
npm run build # Production build
npm run start # Start production
