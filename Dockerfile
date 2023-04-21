FROM node:14

WORKDIR /RickAndMortyNodeApp
COPY package.json .
RUN npm install
COPY . .
CMD npm start
