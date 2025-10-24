# -----------------------------------------------------
# 🏗️ 1. Build Stage
# -----------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install 

# 👇 Add environment variable before build
ENV NEXT_PUBLIC_API_BASE_URL=https://job.thecodemerge.com/api/v1/job-hunter

COPY . .
RUN npm run build

# -----------------------------------------------------
# 🚀 2. Production Stage
# -----------------------------------------------------
FROM node:20-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 80
ENV PORT=80
# 👇 optional (kept for runtime debugging/logs)
ENV NEXT_PUBLIC_API_BASE_URL=https://job.thecodemerge.com/api/v1/job-hunter

CMD ["npm", "start"]
