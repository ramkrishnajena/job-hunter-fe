# -----------------------------------------------------
# 🏗️ 1. Build Stage
# -----------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install 
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


CMD ["npm", "start"]
