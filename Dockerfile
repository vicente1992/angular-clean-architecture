FROM node:lts-bullseye as build

WORKDIR /app

COPY package.*json ./
# RUN node --max-old-space-size=1024 $(which npm) install
RUN npm  install
COPY . .

RUN npm run build

FROM nginx:alpine

ADD ./conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/angular-clean-architecture/ /var/www/app/ 

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]