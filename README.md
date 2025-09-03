🌐 TalkSphere

TalkSphere is a full-stack web application designed to help users build meaningful connections, find learning partners, and practice new languages with people around the globe.
With features like friend requests, real-time chat, video calling, and customizable UI themes, TalkSphere makes language learning both engaging and interactive.


🚀 Tech Stack

Frontend: React, TanStack Query, TailwindCSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT-based login & signup
Other: WebRTC (Video Calling), Socket.io (Real-Time Messaging)

📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/talksphere.git
cd talksphere

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

Or run everything in one go (from the root):
npm run build

▶️ Running the Project

Start the backend server:

cd backend
npm start


Start the frontend development server:

cd frontend
npm run dev


By default:

Frontend runs on: http://localhost:5173/
Backend runs on: http://localhost:5001/

```
.env   

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret



