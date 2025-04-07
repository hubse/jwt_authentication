# Project Title

This application is a simple Express.js API for managing customer data with JWT authentication.

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Running the Application

To start the server, use the following command:

```bash
node index.js
```

The server will run on `http://localhost:3000`.

## API Endpoints

- **GET /api/customers**: Retrieve a list of customers (requires JWT authentication).
- **GET /api/customers/:id**: Retrieve a specific customer by ID (requires JWT authentication).

## Future Enhancements

- Implement a database to store customer data instead of hardcoded values.
- Add user registration and login functionality.
- Improve error handling and logging.
- Implement input validation for API requests.
- Add unit tests for the API endpoints.
