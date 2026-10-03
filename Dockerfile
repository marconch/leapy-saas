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
# Catches the "Ready but never serves" wedge (2026-07-03 outage): the process can
# hold the port while its event loop ignores sockets, so probe over real HTTP.
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3001/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["npx", "next", "start", "-p", "3001"]
