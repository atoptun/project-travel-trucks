<p align="center">
  <img src="./src/assets/logo.svg" alt="TravelTrucks Logo" width="200" />
</p>

<h1 align="center">TravelTrucks</h1>

<p align="center">
  A modern web application for discovering, filtering, and booking campervans. Built with React 19, TypeScript, Vite, Redux Toolkit, and Material UI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/MUI-v6-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
</p>

---

## Overview

**TravelTrucks** provides an intuitive platform for travelers seeking campervan
rentals. Users can explore a comprehensive catalog of campervans, filter results
by location, vehicle type, and equipment, view detailed specifications and user
reviews, bookmark favorite vehicles, and place instant booking requests.

---

## Key Features

- **Interactive Catalog & Filtering**: Search campers by location, vehicle body
  style (_Panel Van_, _Fully Integrated_, _Alcove_), fuel type (_Diesel_,
  _Petrol_, _Hybrid_, _Electric_), and transmission.
- **URL-Synced Search State**: Filter parameters remain synchronized with the
  browser URL (`useSearchParams`), enabling shareable search links and state
  persistence on refresh.
- **Detailed Camper Specs & Gallery**: High-resolution image galleries,
  technical specifications (length, width, tank capacity, consumption), and
  verified customer reviews.
- **Campervan Booking**: Built-in booking form with real-time validation powered
  by `react-hook-form` and `yup`.
- **Persisted Favorites**: Save preferred campervans to a favorites list that
  persists across sessions via `redux-persist` and `localStorage`.
- **Responsive & Accessible Design**: Optimized for mobile, tablet, and desktop
  screens with custom MUI drawers for navigation and mobile filters.
- **Asset Optimization**: Automated image optimization (AVIF, WebP formats) via
  `vite-imagetools` and inline SVG transformations with `vite-plugin-svgr`.

---

## Tech Stack

| Domain                 | Technology                                                           |
| :--------------------- | :------------------------------------------------------------------- |
| **Framework & Core**   | React 19, TypeScript, Vite                                           |
| **Routing**            | React Router v7 (Lazy loading & Suspense)                            |
| **State & API**        | Redux Toolkit (RTK Query), `redux-persist`                           |
| **UI & Styling**       | Material UI (MUI v6 engine), Emotion, Custom CSS Variables Theme     |
| **Forms & Validation** | React Hook Form, `react-hook-form-mui`, Yup                          |
| **Asset Pipeline**     | `vite-plugin-svgr`, `vite-imagetools`, `vite-plugin-image-optimizer` |
| **Code Quality**       | ESLint, Prettier, Husky, lint-staged                                 |

---

## Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and pnpm (or npm/yarn) installed on your system.

```bash
node -v
pnpm -v
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/atoptun/project-travel-trucks.git
   cd project-travel-truck
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables: Copy the example environment file and fill in
   your API base URL.

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local`:

   ```env
   VITE_CAMPERS_BASE_URL=<https://your-api-endpoint.com>
   ```

> [!NOTE] The backend API expects a RESTful service providing the `/campers`
> endpoint. You can use MockAPI or a custom server matching the `CamperIntf`
> schema.

---

## Available Scripts

In the project directory, you can run:

| Command         | Description                                                      |
| :-------------- | :--------------------------------------------------------------- |
| `pnpm dev`      | Starts the Vite development server with HMR.                     |
| `pnpm build`    | Runs TypeScript typechecks (`tsc -b`) and builds for production. |
| `pnpm preview`  | Starts a local web server to preview the production build.       |
| `pnpm lint`     | Runs ESLint to check for code quality issues.                    |
| `pnpm lint-fix` | Automatically fixes ESLint errors where possible.                |
| `pnpm format`   | Formats all code files using Prettier.                           |

---

## Project Structure

```text
project-travel-truck/
├── public/                # Static public assets
├── src/
│   ├── assets/            # SVG icons, images, and brand assets
│   ├── components/        # Reusable UI components (CamperCard, FilterForm, BookingForm, etc.)
│   ├── constants.ts       # Global label maps and constants
│   ├── hooks.ts           # Custom React hooks (useFilters, useFavorite, Typed Redux hooks)
│   ├── pages/             # Route pages (HomePage, CampersPage, CamperDetailsPage, etc.)
│   ├── redux/             # Redux store, RTK Query API endpoints, and slices
│   ├── router.tsx         # React Router configuration
│   ├── themes/            # Custom MUI theme & design system tokens
│   ├── types/             # TypeScript type definitions
│   └── main.tsx           # Application entry point
├── .env.example           # Environment variables template
├── eslint.config.js       # ESLint configuration
├── tsconfig.json          # TypeScript compiler configuration
└── vite.config.ts         # Vite bundler & plugin configuration
```
