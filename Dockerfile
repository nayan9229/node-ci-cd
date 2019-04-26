# The instructions for the first stage
FROM keymetrics/pm2:8-alpine as builder

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN apk --no-cache add g++ nano curl

COPY package*.json ./
#RUN npm install
RUN npm ci

# The instructions for second stage
FROM keymetrics/pm2:8-alpine

WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules

COPY . .

CMD [ "npm", "run", "prod" ]