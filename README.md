# 🍱 Bento-Style Personal Portfolio using Next.js

A cutting-edge, interactive personal portfolio built with **Next.js 16 (App Router)** and **TypeScript**. This project features a high-performance **Bento Grid** layout with drag-and-drop capabilities, integrated with modern CMS and backend services.

## ✨ Key Features

- **Interactive Bento Grid**: A fully draggable and reorderable layout using **@dnd-kit**.
- **Dynamic Content**: Blogs and articles powered by **Contentful CMS**.
- **Backend Power**: Testimonies and form submissions handled by **Supabase**.
- **Modern Styling**: Styled with a mix of **Styled-components** and **Tailwind CSS**.
- **Interactive Maps**: Geographic location data displayed using **Leaflet**.
- **Theme Support**: Seamless Dark and Light mode transitions.
- **Micro-interactions**: Smooth page transitions and hover effects for a premium feel.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Styled-components, Tailwind CSS (v4)
- **Icons**: React Icons

### Animation & Interaction
- **Drag & Drop**: `@dnd-kit/core`, `@dnd-kit/sortable`
- **Transitions**: Native CSS & Custom Page Transitions

### Services & API
- **CMS**: Contentful
- **Backend/Database**: Supabase
- **Maps**: Leaflet & React-Leaflet
- **Email**: Nodemailer

---

## 🏗️ Implementation Details

### Interactive Grid
The core of the portfolio is the **Bento Grid** located in `src/app/home/page.tsx`. It utilizes the `@dnd-kit` library to create a sortable layout of individual tiles. Each tile is a standalone component, allowing for a modular and maintainable structure.

### Service Integrations
- **Supabase**: Used for fetching and submitting user testimonials. See `src/app/lib/supabase` for client configuration.
- **Contentful**: Manages blog post content, providing a headless CMS experience.
- **Leaflet**: Provides interactive map views for showcasing geographic interests or locations.
- **Nodemailer**: Configured to process contact form submissions directly from the portfolio.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
git clone <your-repo-url>
cd angular-next
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Contentful
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token

# Nodemailer
EMAIL_SERVER_USER=your_email
EMAIL_SERVER_PASSWORD=your_password
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio in action.

---

## 📁 Folder Structure

- `src/app`: Application routes and pages (Next.js App Router).
- `src/app/components`: Reusable UI components and grid tiles.
- `src/app/lib`: Service client initializations (Supabase, Contentful).
- `public`: Static assets (images, icons).

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
