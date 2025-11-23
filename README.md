CICD End-Sem Project — Dockerized MERN Application with NGINX + MongoDB
📌 Overview
This project is a Dockerized full-stack MERN application deployed using Docker Compose.
It includes a frontend (React), backend (Node + Express), MongoDB database, and NGINX reverse proxy.
Everything runs in containers, making it portable and production-ready.

🛠️ Tech Stack
🔹 Frontend


React


NPM


Production build served using NGINX


🔹 Backend


Node.js + Express


REST API endpoints


Mongoose ORM


🔹 Database


MongoDB database inside a container


🔹 DevOps


Docker


Docker Compose


NGINX reverse proxy + load balancing


Environment variables


Persistent volumes



⚙️ Architecture
React --> Nginx --> Backend --> MongoDB



Frontend static build served from NGINX


All API requests routed via /api/*


Backend container talks to mongo container


Communication via internal Docker network



📦 Project Structure
cicd_endsem/
│
├── back/                # Node + Express backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── Dockerfile
│
├── front/               # React frontend app
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│
├── nginx/
│   ├── default.conf     # Reverse proxy config
│
├── docker-compose.yml   # Multi-container orchestration
└── README.md


🐳 Docker — How It Works
Backend container


Installs dependencies


Sets PORT=5001


Exposes API


Connects to Mongo container:


mongodb://mongo:27017/todos_db

Frontend container


Builds React app


Static build served by nginx


NGINX container


/ → frontend


/api/* → backend


Mongo container


Data stored in persistent volume



▶️ Running Locally (Docker Compose)

Make sure Docker Desktop is installed

Build and start containers:
docker-compose up --build

Run in background:
docker-compose up -d

Stop:
docker-compose down


🧪 Test


Frontend UI → http://localhost


Health API → http://localhost/api/health


CRUD endpoints:


GET    /api/todos
POST   /api/todos
DELETE /api/todos/:id


🌐 Deployment (EC2 Summary)


Create Ubuntu EC2 instance


Install Docker + Docker Compose


Clone repo


docker-compose up -d


Expose ports 80/443 in AWS Security Group



💾 Persistent Mongo Storage
The compose file attaches a volume:
mongo_data:/data/db

So data is preserved even if container restarts.

🔐 HTTPS (Optional Production Step)


NGINX + Certbot


Auto-renewal


SSL reverse proxy:


https://yourdomain/api/*


📈 Why This Project Is DevOps-Ready


Multi-service orchestration


Infrastructure-as-code (Docker)


ENV-based configuration


Reverse proxy routing


Persistent storage


Cloud compatible (EC2 / Azure / GCP)



🚧 Future Enhancements
✔ CI/CD via GitHub Actions
✔ Production MongoDB (Atlas)
✔ JWT Authentication
✔ Docker Swarm / Kubernetes

If you want, tell me:
👉 “Write me a more advanced README with badges, screenshots, CI/CD section, and deployment commands.”
