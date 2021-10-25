FROM node:latest

ENV HOME=/home/app
ENV PROJ=desafio-mutual

COPY package.json package-lock.json $HOME/$PROJ/

WORKDIR $HOME/$PROJ

RUN npm install --silent --progress=false

COPY . $HOME/$PROJ

CMD npm run dev
