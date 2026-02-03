FROM node:24-alpine

WORKDIR /backend

RUN corepack enable

COPY package.json yarn.lock ./

RUN yarn install --immutable

COPY . .

EXPOSE 3000

CMD ["node", "main.js"]
