FROM node:10

RUN mkdir -p /usr/app 
WORKDIR /usr/app

ARG environment=production 
ENV NODE_ENV=$environment
 
COPY package.json ./
RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
