# Pull latest node image from docker
FROM node:latest

LABEL maintainer='tundexmike@gmail.com'

# Creating ad work directory for the application
WORKDIR /usr/src/app

# copy package.json to install require dependencies
COPY package.json yarn.lock ./

# install dependencies
RUN yarn install

# copy app into folder
COPY . .

# expose ports
EXPOSE 80 443 3000 8001 8080 8100 8200

# start app
CMD ["npm", "run", "dev"]