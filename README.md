# Real-Time Chat Application

## Overview
This is a real-time chat application built using Socket.IO, Node.js, Express, and React. It allows multiple users to communicate in real-time with an interactive and responsive UI.

## Features
- Real-time messaging using WebSockets
- Multiple chat rooms support
- Online user status
- Responsive UI with React
- Typing indicators (optional)
- Message timestamps

## Tech Stack
- **Frontend**: React, HTML, CSS, Socket.IO-client
- **Backend**: Node.js, Express, Socket.IO
- **Database**: MongoDB (if storing messages)

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/Giresh0902/REAL-TIME-CHAT-APP.git
cd realtime-chat-app
```

### 2. Install Dependencies
#### Backend (Node.js + Express + Socket.IO)
```bash
cd backend
npm install
```

#### Frontend (React + Socket.IO-client)
```bash
cd ../frontend
npm install
```

### 3. Start the Application
#### Start Backend
```bash
cd backend
node server.js  # or nodemon server.js
```
#### Start Frontend
```bash
cd frontend
npm start
```

## How It Works
1. Users open the application and connect to the WebSocket server.
2. When a user sends a message, it is broadcasted in real-time to other users.
3. Messages can be displayed in different chat rooms.
4. Users can see who is online and active in the chat.

## API Endpoints (Backend)
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/` | Base endpoint |
| POST | `/send-message` | Send a new chat message |
| GET | `/get-messages` | Retrieve chat history |

## Future Enhancements
- Emoji support
- File sharing
- User avatars
- Private messaging

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome. Feel free to submit a pull request.

---
Developed by Giresh

