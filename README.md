# Nikhil's Portfolio & Tech Blog

A personal portfolio and technical blog built for mapping my journey from a **Full-Stack Developer** transitioning actively into **DevOps Engineering**.

This project serves as both a showcase for my development capabilities and an active, documented learning environment for Linux, Docker, CI/CD, and Cloud Infrastructure.

## 🚀 Live Demo
*(Deployed on Vercel)*
- Add URL here: [portfolio-url.com]

---

## 🛠 Tech Stack

- **Framework**: React 19 (via Vite 6)
- **Language**: TypeScript (Strict)
- **Styling**: Tailwind CSS v4 + Custom "Coffee" CSS Variables
- **Routing**: React Router DOM v7
- **State Management**: Redux Toolkit (Theme toggling, etc)
- **Content**: MDX (*planned*) for DevOps roadmap blogging
- **Hosting**: Vercel (Auto-deployed from `main`)

---

## 🎨 Design System

The portfolio utilizes a clean, minimal design aesthetic focusing heavily on whitespace and typography, explicitly built without heavy animation or graphical gimmicks.

The **Coffee Color Palette** dictates the UI in both light and dark modes:
- **Primary**: Deep Maroon (`#561C24`) | Warm Beige (`#E8D8C4` in Dark Mode)
- **Surface**: Warm Beige (`#E8D8C4`) | Very Dark Maroon (`#2a1018` in Dark Mode)
- **Typography**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) across all components.

---

## 📂 Project Structure

```text
portfolio/
├── .antigravity/         # Project architecture & design rules
├── public/               # Static assets
└── src/
    ├── assets/           # Media & Resume
    ├── components/       # Reusable layout UI (Home, Navbar, Cards)
    ├── data/             # Static configurations (Skills, Projects)
    ├── pages/            # View components mapping to Routes
    ├── posts/            # (Future) MDX blog files for DevOps topics
    └── store/            # Redux setup (themeSlice, etc)
```

---

## 💻 Local Development Setup

To run this project locally, ensure you have Node.js installed, then execute:

```bash
# 1. Clone the repository
git clone https://github.com/sinhaniik/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the Vite development server
npm run dev
```

Your app will be running at `http://localhost:5173`.

---

## ✨ Features Currently Active
- **Full responsive design**: Built "mobile-first" scaling neatly to desktop width.
- **Redux-driven Dark Mode**: Synchronized standard HTML class injection (`<html class="dark">`).
- **Static Content Configuration**: Easily updating Portfolio items natively via `/data` lists (Skills/Featured Projects).
