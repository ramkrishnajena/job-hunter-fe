# 💼 Job Hunter Frontend (job-hunter-fe)

> **Job Hunter Frontend** — A modern web interface built with **Next.js** that displays job listings fetched from the **Job Hunter Backend (job-hunter-be)**.  
> It allows users to browse, search, and filter remote job listings in real-time with a clean UI and responsive layout.

---

## 🚀 Features

- 🌐 **Next.js 16** — Fast, SEO-friendly React framework
- ⚡ **REST API Integration** — Fetches job data from backend
- 🔍 **Search and Filter** — Filter jobs by title, company, tags, or location
- 📄 **Pagination Support** — View jobs page by page
- 🔗 **Apply Now Button** — Opens the external job listing link
- 📱 **Responsive Design** — Optimized for desktop and mobile
- 🎨 **Tailwind CSS** — Clean, scalable styling system

---

## 🧠 Tech Stack

| Layer       | Technology                                                      |
| ----------- | --------------------------------------------------------------- |
| Framework   | Next.js                                                         |
| Language    | TypeScript                                |
| Styling     | Tailwind CSS                                                    |
| HTTP Client | Fetch API / Axios                                               |
| API Source  | [Job Hunter Backend (Node + Prisma + SQLite)](job-hunter-be) |

---

## ⚙️ Prerequisites

Before setting up, ensure you have:

- [Node.js](https://nodejs.org/en/download/) (v18+)
- npm or yarn
- The **Job Hunter Backend** running locally (see `job-hunter-be/README.md`)

---

## 🧩 1. Setup Instructions


### 🏗️ Step 1 — Clone the repository

- Set the job-hunter-be api base path `NEXT_PUBLIC_API_BASE_URL` in `.env`.

### 🏗️ Step 2 — Clone the repository

```bash
git clone https://github.com/<your-username>/job-hunter-fe.git
cd job-hunter-fe
npm install
npm run dev
```

