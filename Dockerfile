# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci 
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./

# start app
CMD ["npm", "start"]

