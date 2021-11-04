FROM node:14.17

WORKDIR /usr/app

RUN npm i -g npm pm2

COPY ./package*.json ./
RUN npm i
COPY ./ ./
RUN npm run build

EXPOSE 5500

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]