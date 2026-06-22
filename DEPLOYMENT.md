# Deployment guide

## Recommended setup

Deploy the frontend on Vercel and the backend on Render.

## Backend on Render

Root Directory: `server`

Build Command:

```bash
npm install --include=dev && npm run build
```

Start Command:

```bash
npm start
```

Environment variables:

```env
NODE_ENV=production
CLIENT_URL=https://your-client-app.vercel.app
SESSION_SECRET=replace_with_long_random_secret
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

## Frontend on Vercel

Root Directory: `Client`

Build Command:

```bash
npm run build
```

Output Directory:

```bash
dist
```

Environment variable:

```env
VITE_BASE_URL=https://your-backend-url.onrender.com
```

After changing `VITE_BASE_URL`, redeploy the frontend because Vite embeds it during build.

## Important

Do not upload/commit these folders/files:

```txt
node_modules/
dist/
.env
.vercel/
.git/
.npm-cache/
```
