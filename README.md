# 🚀 Nexus Lending (Nexus Loans)

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Nexus Lending is a modern, consumer-focused fintech platform designed to democratize credit access through AI-powered technology. By leveraging alternative data modeling, Nexus offers a faster, more transparent, and user-friendly alternative to traditional banking.

---

## 🎨 Design Philosophy: "The Layered Canvas"

Unlike traditional dark-themed fintech apps, Nexus utilizes a **Layered Light Mode** for maximum clarity and trust:

* **The Foundation:** A crisp white background (`#FFFFFF`) that fills the entire viewport to eliminate "black bars" on wide screens.
* **The Hero:** A high-impact, wide-format Cyan card (`#00B4D8`) that acts as a focal point.
* **Depth:** Subtle use of shadows (`shadow-2xl`) and off-white offsets to separate navigation from content.

---

## 🛠️ Tech Stack

### Core
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | 19.2.4 | Component-based UI Architecture |
| **Vite** | 8.0.4 | Ultra-fast development server & build tool |
| **Tailwind CSS** | 4.2.2 | Utility-first styling with `@import` engine |

### Key Dependencies
* **PostCSS 8.5:** Advanced CSS processing.
* **ESLint 9.39:** Strict code quality and React Hooks linting.

---

## 📂 Project Structure

```bash
nexus-loans/
├── src/
│   ├── assets/             # Optimized hero images (hero02.jpg, hero2.png, etc.)
│   ├── components/
│   │   ├── Navbar.jsx      # Responsive nav with mega-dropdowns
│   │   └── Hero.jsx        # Interactive 8-second auto-play slider
│   ├── App.jsx             # Entry component (Clean: no legacy App.css)
│   ├── index.css           # Global resets and Tailwind directives
│   └── main.jsx            # React entry point
├── index.html              # HTML wrapper
└── tailwind.config.js      # Theme extensions
✨ Implemented Features
🎞️ Interactive Hero Slider
A fully responsive slideshow designed for high engagement:

Dynamic Content: Smooth transitions between "Smart Loans," "Loan Tracking," and "Instant Approval."

Smart Controls: Custom play/pause logic and manual navigation.

Floating Geometry: Decorative 3D-inspired circles and blips that adapt to screen size.

Glow Effects: High-fidelity white-glow backgrounds for product imagery.

📱 Responsive Layout
The "SoFi" Layout: A centered max-w-[1440px] container maintaining elegant white space on ultra-wide monitors.

Mobile Optimized: Hamburger-menu navigation and stacked hero layout for seamless mobile borrowing.

🚀 Getting Started
1. Clone & Install
Bash
git clone [https://github.com/jayzcreative/Nexus-Lending.git](https://github.com/jayzcreative/Nexus-Lending.git)
cd nexus-loans
npm install
2. Launch Development
Bash
npm run dev
3. Build for Production
Bash
npm run build
🚧 Roadmap
[x] Phase 0: UI Scaffolding & Hero Animation.

[ ] Phase 1: Complete Landing Page sections (Product Grid, Testimonials, Footer).

[ ] Phase 2: Integrate react-router-dom for multi-page navigation.

[ ] Phase 3: Build the "Check My Rate" multi-step lead capture form.

[ ] Phase 4: User Dashboard (Loan tracking, payment history).

[ ] Phase 5: Backend integration for AI-powered credit scoring.

🔧 Configuration Note (Tailwind 4.0)
To maintain the edge-to-edge white background and prevent "black bars" on wide displays, index.css targets the root elements directly:

CSS
@import "tailwind";

html, body, #root {
  background-color: white !important;
  margin: 0;
  width: 100%;
}
Current Version: 0.0.1

Author: JayZtheplug (Leo Noel Zuze)

Last Updated: April 8, 2026