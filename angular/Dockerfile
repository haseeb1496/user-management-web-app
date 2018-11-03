FROM node:9.6.1
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
RUN npm install -g @angular/cli@1.7.1
COPY . /usr/src/app
EXPOSE 4200
CMD ng serve --host 0.0.0.0
