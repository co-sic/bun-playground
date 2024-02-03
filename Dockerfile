FROM oven/bun:1.0.25-alpine as parent

FROM parent as build


WORKDIR /usr/src/app

COPY package.json bun.lockb tsconfig.json ./
RUN bun install --frozen-lockfile

COPY src/ ./src/

RUN bun run build

EXPOSE 4500

CMD [ "bun", "./dist/index.js" ]
