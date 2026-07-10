# 🔐 Password Generator

A responsive Password Generator built using **React** and **Tailwind CSS**. This project generates secure passwords based on user-selected criteria such as password length, numbers, and special characters.

---

## ✨ Features

- Generate secure random passwords
- Customize password length
- Include or exclude numbers
- Include or exclude special characters
- Copy password to clipboard with a single click
- Responsive and modern UI using Tailwind CSS

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite

---

## 📚 Concepts Practiced

### React Hooks
- **useState** – Managed password length, generated password, and toggle states.
- **useEffect** – Automatically regenerated the password whenever user preferences changed.
- **useCallback** – Optimized the password generation function by memoizing it.
- **useRef** – Referenced the password input field to select and copy the generated password.

### JavaScript
- `Math.random()` for random character generation
- `Math.floor()` for random indexing
- Arrays & Strings
- Clipboard API (`navigator.clipboard.writeText()`)

### Styling
- Responsive layouts with Tailwind CSS
- Utility-first CSS approach
- Modern UI design

---

## 📂 Project Structure

```text
passwordgenerator/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/your-username/Password-Generator.git
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

## 🎯 What I Learned

- Managing state efficiently using React Hooks.
- Understanding when to use `useState`, `useEffect`, `useRef`, and `useCallback`.
- Working with the Clipboard API.
- Generating random passwords using JavaScript.
- Building clean, responsive user interfaces with Tailwind CSS.
- Writing reusable and maintainable React components.
