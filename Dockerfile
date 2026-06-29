# leapy-saas — Next.js Node server (needs a runtime for the /api/contact SQLite route).
# Multi-stage: build with full toolchain (better-sqlite3 is a native module), run the built app.

FROM node:22-bookworm AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-bookworm AS run
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package.json /app/package-lock.json /app/next.config.ts ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
# SQLite leads DB lives here; mount a volume to persist across deploys.
RUN mkdir -p /app/data
EXPOSE 3001
CMD ["npx", "next", "start", "-p", "3001"]
