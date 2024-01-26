FROM oven/bun:1.0.25-alpine as parent

FROM parent as build

RUN apk add --no-cache python3 make g++

WORKDIR /usr/src/app

COPY package.json bun.lockb tsconfig.json ./
RUN bun install --frozen-lockfile
