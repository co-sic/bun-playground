FROM node:20-alpine as parent

FROM parent as build


WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./
RUN npm ci

COPY src/ ./src/
COPY schema.graphql ./schema.graphql

RUN npm run build

EXPOSE 4502

CMD [ "node", "./dist/index.js" ]
