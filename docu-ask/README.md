# DocuAsk

## Project Overview
DocuAsk is a full-stack Document Management Portal frontend built with React.js. It allows users to sign up, log in, upload and manage documents, and ask AI-powered questions related to their documents.

## Tech Stack
- React.js
- React Router
- Vite (build tool)

## Features
- User authentication (Sign Up, Login) simulated with local state
- Dashboard with document upload, list, update, and delete functionality
- AI-powered question answering simulation based on uploaded documents

## Running Locally
1. Clone the repository
2. Navigate to the `docu-ask` directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173`

## Hosting
This frontend can be hosted on GitHub Pages or any static site hosting service.

### GitHub Pages Hosting
1. Build the project:
   ```
   npm run build
   ```
2. Deploy the `dist` folder to GitHub Pages using a tool like `gh-pages` or GitHub Actions.

## Notes
- Backend API and AI integration are not included in this frontend-only project.
- Authentication is simulated for demonstration purposes.

