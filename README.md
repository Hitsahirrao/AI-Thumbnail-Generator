# 🎨 AI Thumbnail Generator

🚀 **AI Thumbnail Generator** is a full-stack web application that enables users to generate eye-catching YouTube thumbnails using AI. Users can customize styles, color themes, and aspect ratios to create professional-quality thumbnails in seconds.

## 🌐 Live Demo

* **Live Application:** https://ai-thumbnail-generator-teal.vercel.app
* **GitHub Repository:** https://github.com/Hitsahirrao/AI-Thumbnail-Generator

---

## ✨ Features

* 🔐 User Authentication & Session Management
* 🎨 AI-Powered Thumbnail Generation
* 🖼️ Multiple Thumbnail Styles
* 🌈 Custom Color Schemes
* 📐 Support for Different Aspect Ratios
* 📝 Optional Text Overlay and Prompt Customization
* 📂 Thumbnail History Management
* 🗑️ Delete Generated Thumbnails
* ☁️ Cloudinary Image Storage
* ⚡ Responsive and Interactive UI
* 🎞️ Smooth Animations with Framer Motion
* 🔄 RESTful APIs with MVC Architecture
* ⚠️ Error Handling and Server-Side Validation

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Axios

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB Atlas
* Mongoose

### Libraries & Tools

* Express-Session
* Connect-Mongo
* bcryptjs
* Cloudinary
* Multer
* Axios
* CORS
* dotenv

---

## 📁 Project Structure

```text
AI-Thumbnail-Generator/
│
├── Client/                 # React Frontend
│── server/                 # Express Backend
│   ├── controllers/        # Business Logic
│   ├── models/             # MongoDB Schemas
│   ├── routes/             # API Routes
│   ├── middleware/         # Custom Middleware
│   ├── config/             # Database and Cloudinary Config
│   └── server.ts           # Entry Point
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/Hitsahirrao/AI-Thumbnail-Generator.git
cd AI-Thumbnail-Generator
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd Client
npm install
npm run dev
```

Frontend runs locally on:

```text
http://localhost:5173
```

Backend runs locally on:

```text
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` directory:

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
CLIENT_URL=http://localhost:5173
CLOUDINARY_URL=your_cloudinary_url
```

---

## 🚀 Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* Database hosted on MongoDB Atlas
* Images stored using Cloudinary
* Environment variables configured securely for production

---

## 🧠 Key Learnings

* Built a complete full-stack MERN application
* Implemented user authentication and session management
* Integrated AI-based image generation
* Managed image storage with Cloudinary
* Designed REST APIs following MVC architecture
* Used TypeScript in both frontend and backend
* Created responsive UI with Tailwind CSS
* Implemented real-world deployment using Vercel, Render, and MongoDB Atlas

---

## 📬 Contact

📧 Email: [hiteshahirrao282001@gmail.com](mailto:hiteshahirrao282001@gmail.com)

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
