FROM node:alpine

WORKDIR /usr/app
COPY . .
RUN npm install --package-lock-only
RUN npm run build

CMD npm run start