# LuxeStore - Premium Marketplace App

A modern, responsive e-commerce application built with Next.js 15/16 (App Router) featuring a premium design and mock authentication handling.

## 🚀 Features

### Public Pages

- **Landing Page**: 7 detailed sections including Hero, Features, Trending Items, Stats, and Testimonials.
- **Marketplace**: Browse items fetched from external API (JSONPlaceholder) with infinite scroll feel style.
- **Item Details**: Detailed product view with simulated reviews, ratings, and related items.
- **Authentication**: Mock login system using cookies for session management.


## 🛠️ Tech Stack

- **Framework**: Next.js 15/16 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS (Premium Dark Theme)
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Data**: JSONPlaceholder API

## 📦 Setup & Installation

1. **Clone the repository** (or navigate to directory)

   ```bash
   cd amni
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Mock Credentials

To test the protected features, use the following credentials on the Login page:

- **Email**: `user@example.com`
- **Password**: `password`

## 📂 Route Structure

- `/` - Landing Page
- `/items` - Marketplace List
- `/items/[id]` - Product Details
- `/login` - Sign In Page
- `/add-item` - Create Listing (Protected)

## 🎨 Design Philosophy

The application follows a "Premium Dark" aesthetic with:

- Glassmorphism effects
- Smooth gradients
- Micro-interactions and hover states
- Consistent spacing and typography
- Mobile-first responsive design
