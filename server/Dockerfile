FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock *.js ./
RUN yarn install

CMD ["yarn", "start"]
