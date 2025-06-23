# Travel Agency Full-Stack Application

This project contains a React frontend (Vite) and a Node.js/Express backend. It is ready for Codespaces, Docker, Kubernetes, and CI/CD with GitHub Actions.

## Structure
- `frontend/` — React app (Vite)
- `backend/` — Node.js/Express API
- `k8s/` — Kubernetes deployment YAMLs
- `.github/workflows/` — GitHub Actions workflow
- `.devcontainer/` — Codespaces dev container config

## Getting Started (Locally)
1. Install dependencies:
   - `npm install` in both `frontend` and `backend`
2. Run backend: `npm start` in `backend/`
3. Run frontend: `npm run dev` in `frontend/`

## Codespaces
- Open in Codespaces. Ports 4000 (backend) and 5173 (frontend) are forwarded.
- The devcontainer will auto-install dependencies.

## Docker
- Build images:
  - `docker build -t travel-agency-backend ./backend`
  - `docker build -t travel-agency-frontend ./frontend`

## Kubernetes
- Deploy using YAMLs in `k8s/` folder.

## CI/CD
- GitHub Actions workflow builds and tests both frontend and backend on push.

---
Replace sample data and extend features as needed for your travel agency use case.
