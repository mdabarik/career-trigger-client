
# Career Trigger Client

**Career Trigger Client** is a modern, high-performance web application designed for a professional career community. This frontend is built with a focus on seamless user experience, responsive design, and scalable architecture using **Next.js** and **Tailwind CSS**.

---

## Architectural Excellence & Design Principles

This client-side application is not just about UI; it's about clean, maintainable, and efficient code. The following principles are strictly followed:

- **Modular Component Architecture:** Components are designed to be small, reusable, and independent, following the **Single Responsibility Principle (SRP)**.
- **KISS (Keep It Simple, Stupid):** Logic is kept clean and readable, avoiding unnecessary complexity in state management and rendering.
- **YAGNI (You Ain't Gonna Need It):** Features are implemented based on requirements, ensuring the bundle size remains optimized without "dead code."
- **DRY (Don't Repeat Yourself):** Reusable UI components (Buttons, Inputs, Cards) and Custom Hooks are utilized to minimize code duplication.
- **Composition over Inheritance:** Leveraging React's composition model to build complex UIs from smaller, simpler components.
- **Separation of Concerns:** UI logic is separated from business logic by utilizing **Custom Hooks** for API calls and state synchronization.

---

## Tech Stack

- Framework: React.js / Next.js
- Styling: Tailwind CSS (Utility-first CSS)
- State Management: Redux Toolkit / React Context API
- Data Fetching: RTK Query / Axios + Axios Interceptors
- Form Management: React Hook Form
- Validation: Zod
- Icons & UI: React Icons, ShadCn

## Key Features

- Dynamic Role-Based Dashboard: Personalized interfaces for Admins, Editors, and Users.
- Interactive Feed: A seamless browsing experience for career posts and categories.
- Secure Authentication: Integration with JWT-based login, registration, and persistent sessions.
- Content Creation Suite: A powerful editor for creating posts with real-time validation.
- Responsive Design: Fully optimized for Mobile, Tablet, and Desktop views.
- Optimistic UI Updates: Providing an instant feedback loop for likes, comments, and reactions.

## Frontend Security & Optimization

- Protected Routes: Higher-Order Components (HOC) and Middlewares to prevent unauthorized access.
- JWT Persistence: Secure handling of access tokens in memory or HttpOnly cookies.
- Lazy Loading: Code-splitting and lazy loading of components to improve initial page load speed.
- Input Sanitization: Preventing XSS attacks through controlled inputs and validation.

---

## Project Structure

The project follows a **Feature-Based Folder Structure**, making it highly intuitive for developers to navigate:

```text

career-trigger-client/
│
├─ public/
│   ├─ images/
│   ├─ icons/
│   └─ favicon.ico
│
├─ src/
│   ├─ app/
│   │   ├─ layout.tsx
│   │   ├─ page.tsx
│   │
│   │   ├─ login/page.tsx
│   │   ├─ register/page.tsx
│   │
│   │   ├─ posts/
│   │   │   ├─ page.tsx
│   │   │   └─ [slug]/page.tsx
│   │
│   │   ├─ quizes/page.tsx
│   │
│   │   └─ dashboard/
│   │       ├─ layout.tsx
│   │       ├─ page.tsx
│   │       ├─ posts/
│   │       │   ├─ page.tsx
│   │       │   ├─ add/page.tsx
│   │       │   └─ [id]/page.tsx
│   │       │
│   │       ├─ users/page.tsx
│   │       ├─ categories/page.tsx
│   │       └─ profile/page.tsx
│
├─ src/
│   ├─ components/
│   │   ├─ common/
│   │   │   ├─ Button.tsx
│   │   │   ├─ Input.tsx
│   │   │   ├─ Modal.tsx
│   │   │   ├─ Navbar.tsx
│   │   │   └─ Footer.tsx
│   │   │
│   │   ├─ posts/
│   │   │   ├─ PostCard.tsx
│   │   │   ├─ PostList.tsx
│   │   │   └─ PostDetails.tsx
│   │   │
│   │   ├─ categories/
│   │   │   ├─ CategoryCard.tsx
│   │   │   └─ CategoryList.tsx
│   │   │
│   │   ├─ dashboard/
│   │   │   ├─ Sidebar.tsx
│   │   │   ├─ StatsCard.tsx
│   │   │   ├─ PostTable.tsx
│   │   │   └─ UserTable.tsx
│   │   │
│   │   └─ auth/
│   │       ├─ LoginForm.tsx
│   │       └─ RegisterForm.tsx
│
├─ src/
│   ├─ features/
│   │
│   │   ├─ public/
│   │   │   ├─ posts/
│   │   │   │   ├─ postsAPI.ts
│   │   │   │   ├─ usePosts.ts
│   │   │   │   └─ types.ts
│   │   │   │
│   │   │   └─ categories/
│   │   │       ├─ categoriesAPI.ts
│   │   │       ├─ useCategories.ts
│   │   │       └─ types.ts
│   │
│   │   ├─ private/
│   │   │   └─ quizes/
│   │   │       ├─ quizesAPI.ts
│   │   │       ├─ useQuizes.ts
│   │   │       └─ types.ts
│   │
│   │   ├─ dashboard/
│   │   │   ├─ posts/
│   │   │   │   ├─ api.ts
│   │   │   │   ├─ usePosts.ts
│   │   │   │   └─ types.ts
│   │   │   │
│   │   │   ├─ categories/
│   │   │   │   ├─ api.ts
│   │   │   │   ├─ useCategories.ts
│   │   │   │   └─ types.ts
│   │   │   │
│   │   │   └─ users/
│   │   │       ├─ api.ts
│   │   │       ├─ useUsers.ts
│   │   │       └─ types.ts
│   │
│   │   └─ auth/
│   │       ├─ authAPI.ts
│   │       ├─ useAuth.ts
│   │       └─ types.ts
│
├─ src/
│   ├─ types/
│   │   ├─ layout.ts
│
├─ src/
│   ├─ utils/
│   │   ├─ buildQuery.ts
│   │   └─ errorMessage.ts
│
├─ src/
│   ├─ styles/
│   │   └─ globals.css
│
├─ .env.local
├─ next.config.js
├─ package.json
└─ tsconfig.json

```

### Installation & Setup

## 1.Clone the Repository:

```bash
git clone [https://github.com/mdabarik/career-trigger-client.git](https://github.com/mdabarik/career-trigger-client.git)
cd career-trigger-client
```

## 2. Install Dependencies:

```bash
npm install
```

## 3. Environment Variables: .env (root - same as backend)

```bash
JWT_SECRET=abcdtefd
JWT_REFRESH_SECRET=abdfadf
```

## 4. Run the Project:

```bash
# Development mode
npm run dev

# Production build
npm run build
npm run start
```

## Thanks
