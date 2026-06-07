# 📸 Instagram Clone

A frontend Instagram clone built with **React (Vite)** and **JSON Server** as a mock REST API backend.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React (Vite) | Frontend UI |
| JSX | Component templating |
| JSON Server | Mock REST API (db.json) |
| Axios | HTTP requests |
| React Router DOM | Page navigation |
| CSS | Styling |

---

## 📁 Project Structure

```
instagram/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── Feed.jsx
│   ├── Posts.jsx
│   ├── Profile.jsx
│   ├── Sidebar.jsx
│   ├── Stories.jsx
│   ├── Suggestions.jsx
│   ├── ViewStory.jsx
│   ├── main.jsx
│   └── index.css
├── db.json
├── index.html
├── vite.config.js
└── package.json
```

---

## ✨ Features

- 📰 Feed with posts
- 👤 User profile page
- 👥 Followers & suggestions
- 📖 Stories viewer
- ➕ Follow / Unfollow functionality
- 🔄 Live data via JSON Server

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vishal-4696/instagram-clone.git
cd instagram-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start JSON Server (mock backend)

```bash
npx json-server --watch db.json --port 3000
```

### 4. Start React app (in a new terminal)

```bash
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

> Make sure both the React app and JSON Server are running at the same time.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npx json-server --watch db.json --port 3000` | Start mock API server |

---

## 🙋‍♂️ Author

**Vishal D**  
B.Sc. Computer Science — VIT Chennai  
GitHub: [@vishal-4696](https://github.com/YOUR_USERNAME)

---

## 📄 License

This project is for learning purposes only.
