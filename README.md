# Form Management System

This project is a simple form management system built using Node.js, Express.js, TypeORM, and MySQL. To set up the project, follow these steps:

1. **Prerequisites:** Ensure that Node.js and npm are installed on your machine, and MySQL server is installed and running.

2. **Installation:** Clone this repository, navigate to the project directory, and install dependencies by running `npm install`.

3. **Database Setup:** Start your MySQL server and create a new database named `form_db`.

4. **Configuration:** Configure your database connection in `ormconfig.json` file.

5. **Running the Server:** Build the project using `npm run build` and start the server with `npm start`. The server will run on http://localhost:3000.

## Endpoints

- `POST /api/form`: Create a new form.
- `POST /api/fill_data`: Fill data for a form.
- `GET /api/fill_data`: Get all data for a form.

## Technologies Used

- Node.js
- Express.js
- TypeORM
- MySQL
- TypeScript

