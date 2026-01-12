# Kavithma Dharmathilake - Portfolio

A modern, dark-themed portfolio website showcasing my work as a Software Engineer.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Built with React and Vite for fast performance
- 🎯 Smooth scrolling navigation
- 💼 Complete showcase of projects, experience, and achievements
- 🎭 Beautiful animations and transitions

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── public/
│   └── profileimg.jpg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Sections

- **Hero** - Introduction with profile image and social links
- **About** - Personal background and statistics
- **Skills** - Technical skills organized by category
- **Experience** - Professional work experience
- **Projects** - Featured projects with descriptions
- **Education** - Academic qualifications
- **Achievements** - Awards, publications, and certifications
- **Contact** - Contact information and soft skills

## Customization

The portfolio uses CSS custom properties for easy theming. Edit `src/index.css` to change colors:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --accent: #6366f1;
  /* ... */
}
```

## License

This project is open source and available under the MIT License.

