# FROM oven/bun:latest as base
# WORKDIR /usr/src/app


# FROM base AS install
# RUN mkdir -p /temp/dev
# COPY package.json bun.lock /temp/dev/
# RUN cd /temp/dev && bun install --frozen-lockfile

# RUN mkdir -p /temp/prod
# COPY package.json bun.lock /temp/prod/
# RUN cd /temp/prod && bun install --frozen-lockfile --production


# FROM base AS build
# COPY --from=install /temp/dev/node_modules node_modules
# COPY . .
# RUN bun run build

# FROM base AS release
# COPY --from=base /app/package.json /app/bun.lock ./
# COPY --from=install /temp/prod/node_modules node_modules
# COPY --from=build /usr/src/app/dist .

# EXPOSE 4321
# ENTRYPOINT [ "bun", "run", "start" ]


FROM oven/bun:latest AS base
WORKDIR /app

FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS build
COPY --from=deps /app/node_modules node_modules
COPY . .
RUN bun run build

FROM base AS release
COPY --from=deps /app/node_modules node_modules
COPY --from=build /app/dist ./dist
COPY  package.json bun.lock ./

EXPOSE 4321
ENTRYPOINT [ "bun", "run", "start" ]
# ENTRYPOINT [ "sleep", "infinity" ]

# COPY . .
# RUN bun install
# RUN bun run build
# EXPOSE 4321
# ENTRYPOINT [ "bun", "run", "start" ]