FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app


COPY ["package.json", "package-lock.json*", "./"]

COPY . .

RUN npm install
RUN npm run build

EXPOSE 80

CMD [ "cp" , "-r", "/app/build" ,"/app/release" ]
# CMD [ "npm" , "run","build" ]