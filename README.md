# ZapTool

This project now includes a simple Django backend providing API endpoints for authentication.

## Backend setup

1. Install dependencies from `backend/requirements.txt`.
2. Run migrations with `python manage.py migrate`.
3. Start the development server with `python manage.py runserver`.

The API exposes:

- `POST /api/signup/` – Register a new user. Send `username`, `email` and `password`.
- `POST /api/login/` – Obtain an authentication token. Send `username` and `password`.
- `GET /api/me/` – Retrieve the current user when providing the token as `Authorization: Token <token>`.

## Frontend usage

The React application consumes these endpoints via `src/lib/api.js` and manages authentication state inside `src/contexts/AuthContext.jsx`.
