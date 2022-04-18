FROM node:16-alpine

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn lint
RUN yarn build

CMD ["yarn", "start"]
