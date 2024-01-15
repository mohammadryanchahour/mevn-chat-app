# MEVN Chat Application

This is a simple chat application built using the MEVN stack (MongoDB, Express.js, Vue.js, Node.js) with real-time communication facilitated by Socket.io.

## Features

- Real-time chat with multiple users
- Socket.io for real-time communication
- MEVN stack for full-stack development

## Project Structure

The project is organized into client and server directories for the Vue.js frontend and Node.js backend, respectively.

### Technologies Used

- **Client-side (Vue.js):**

  - Vue.js 3
  - Vue Router
  - Socket.io client

- **Server-side (Node.js):**
  - Node.js with Express.js
  - MongoDB with Mongoose
  - Socket.io for real-time communication

## Getting Started

### Prerequisites

Make sure you have Node.js and MongoDB installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

   Replace `<repository-url>` with the actual URL of your Git repository.

2. **Navigate to the project directory:**

   ```bash
   cd mevn-chat-app
   ```

3. **Install dependencies for both client and server:**

   ```bash
   # Navigate to the client directory
   cd client
   npm install

   # Navigate to the server directory
   cd ../server
   npm install
   ```

4. **Set up the MongoDB database:**

   - Create a MongoDB database and update the connection string in `server/.env` file.

5. **Start the server:**

   ```bash
   # Inside the server directory
   nodemon index.js || node index.js
   ```

   Visit: http://localhost:3000

6. **Start the client:**

   ```bash
   # Inside the client directory
   npm run dev
   Visit: http://localhost:5173
   ```

## Project Configuration

### Server Configuration

- Update the MongoDB connection string in `server/.env` file.

### Client Configuration

- Update the Socket.io server URL in `client/src/main.js` file.

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests. Follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is open-source and available under the [MIT License](LICENSE).
