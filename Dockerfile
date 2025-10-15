FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build --no-lint

RUN npm install typescript --no-save \
    && npx tsc next.config.ts --outDir . \
    && mv next.config.js next.config.js

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "start", "--", "-H", "0.0.0.0"]