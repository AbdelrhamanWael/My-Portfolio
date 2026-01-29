<div align="center">
  
# 🚀 Abdelrhaman Wael - Portfolio

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**A modern, animated, and responsive portfolio website showcasing my journey as a Full Stack Developer**

[🌐 Live Demo](https://abdelrhamanwael.github.io/My-Portfolio/) • [📧 Contact Me](mailto:abdelrhamanwael8@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/abdelrhaman-wael-mohammed-790171366/)

</div>

---

## ✨ Overview

Welcome to my personal portfolio! This is a modern single-page application (SPA) built with React, featuring stunning animations, dark/light mode, and a beautiful user interface. The portfolio showcases my projects, skills, experience, and education in an engaging way.

---

## 🎯 Features

### 🎨 **Visual & UI**

| Feature                    | Description                                        |
| -------------------------- | -------------------------------------------------- |
| 🌙 **Dark/Light Mode**     | Toggle between themes with smooth transitions      |
| ✨ **Particle Background** | Interactive animated particles in the hero section |
| 🖱️ **Custom Cursor**       | Unique cursor with hover effects                   |
| ⏳ **Loading Screen**      | Branded splash screen with progress animation      |
| 📊 **Animated Stats**      | Count-up animation for statistics                  |
| ⌨️ **Typing Effect**       | Dynamic role cycling in hero section               |

### 🔧 **Functional**

| Feature                 | Description                                         |
| ----------------------- | --------------------------------------------------- |
| 📱 **Fully Responsive** | Optimized for all devices (mobile, tablet, desktop) |
| 📧 **Contact Form**     | EmailJS integration for direct messaging            |
| ⬆️ **Scroll to Top**    | Floating button for easy navigation                 |
| 🔗 **Smooth Scrolling** | CSS-based smooth scroll behavior                    |
| 🎭 **Framer Motion**    | Fluid animations throughout the site                |

### 📄 **Sections**

- 🏠 **Hero** - Animated introduction with typing effect
- 📊 **Stats** - Animated counters for key metrics
- 👤 **About** - Personal info with professional photo
- 💻 **Skills** - Technology stack showcase
- 💼 **Experience** - Timeline of work history
- 🎓 **Education** - Academic background & certifications
- 🚀 **Projects** - Portfolio of work with live demos
- 📬 **Contact** - Get in touch form

---

## 🛠️ Tech Stack

<div align="center">

|    Category    |  Technology   | Version  |
| :------------: | :-----------: | :------: |
|  **Frontend**  |     React     |  19.2.0  |
| **Build Tool** |     Vite      |  7.2.2   |
|  **Styling**   | Tailwind CSS  |  4.1.17  |
| **Animation**  | Framer Motion | 12.23.24 |
|   **Icons**    | Lucide React  | 0.554.0  |
|   **Email**    |    EmailJS    |  Latest  |
|  **Linting**   |    ESLint     |  9.39.1  |

</div>

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── About.jsx          # About section with photo
│   ├── Contact.jsx        # Contact form with EmailJS
│   ├── CustomCursor.jsx   # Custom cursor effect
│   ├── Education.jsx      # Education & certifications
│   ├── Experience.jsx     # Work experience timeline
│   ├── Footer.jsx         # Site footer
│   ├── Hero.jsx           # Hero section with typing effect
│   ├── LoadingScreen.jsx  # Splash screen
│   ├── Navbar.jsx         # Navigation bar
│   ├── ParticleBackground.jsx  # Animated particles
│   ├── Projects.jsx       # Projects showcase
│   ├── ScrollToTop.jsx    # Scroll button
│   ├── Skills.jsx         # Skills grid
│   ├── Stats.jsx          # Animated statistics
│   └── ThemeToggle.jsx    # Dark/Light mode toggle
├── context/
│   └── ThemeContext.jsx   # Theme state management
├── App.jsx                # Main application
├── App.css                # Global styles + light mode
└── main.jsx               # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbdelrhamanWael/My-Portfolio.git
   cd My-Portfolio/app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

---

## ⚙️ Configuration

### EmailJS Setup (Optional)

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Update `src/Components/Contact.jsx`:
   ```javascript
   await emailjs.sendForm(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     formRef.current,
     "YOUR_PUBLIC_KEY",
   );
   ```

---

## 📸 Screenshots

### 🌙 Dark Mode

<img width="100%" alt="Portfolio Dark Mode" src="https://github.com/user-attachments/assets/8a371015-dd95-4ed9-af61-18cc583ec3bc" />

---

## 👨‍💻 About Me

I'm **Abdelrhaman Wael**, a passionate Full Stack Developer currently pursuing my Computer Science degree at Egyptian Chinese University.

### 💼 Experience

- **Digital Egypt Pioneers Program** - Full Stack .NET Web Developer (2024-2025)
- **DevWave** - Web Development Intern (2024)

### 🔧 Skills

`React` `JavaScript` `TypeScript` `.NET` `C#` `Tailwind CSS` `Firebase` `SQL` `Git`

---

## 🌐 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AbdelrhamanWael)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abdelrhaman-wael-mohammed-790171366/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abdelrhamanwael8@gmail.com)

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ If you like this portfolio, give it a star!**

Made with ❤️ by **Abdelrhaman Wael**

</div>
