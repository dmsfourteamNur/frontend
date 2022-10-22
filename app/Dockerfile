FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app


COPY ["package.json", "package-lock.json*", "./"]

COPY . .

RUN npm install
# RUN npm run build

EXPOSE 3000

# CMD [ "echo" , "Build ready" ]
CMD [ "npm" , "start" ]