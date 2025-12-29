# Dairy Farm Backend

## Setup

1. Make sure MongoDB is running locally on the default port (27017).
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

The backend will run on http://localhost:3000

## API Endpoints
- `POST /api/register` — Register a new user. `{ username, password }`
- `POST /api/login` — Login with existing user. `{ username, password }`
