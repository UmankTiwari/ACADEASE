# Acadease 🎓

A modern academic support platform that helps students learn smarter.

## Features ✨

- Smart Search: Find relevant academic resources quickly
- AI Chat: Get instant help with your questions
- User-friendly Interface: Clean and intuitive design
- Real-time Responses: Quick and accurate results

## Tech Stack 🛠️

- Frontend: React.js with Tailwind CSS
- Backend: Node.js & Express
- Database: MongoDB
- API: RESTful architecture

## Getting Started 🚀

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/UmankTiwari/ACADEASE.git
   cd acadease
   ```

2. Install dependencies:

   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Create a .env file in the server directory:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the development servers:

   ```bash
   # Start backend (from server directory)
   npm start

   # Start frontend (from client directory)
   npm start
   ```

## Project Structure 📁

```
acadease/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   └── App.js       # Main app component
│   └── package.json
└── server/              # Express backend
    ├── models/          # MongoDB models
    ├── index.js         # Server entry point
    └── package.json
```

## Contributing 🤝

Feel free to fork and submit pull requests!

## License 📄

MIT License - feel free to use and modify as you wish.
