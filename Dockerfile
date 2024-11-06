FROM node:latest as build
 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ENV VITE_API_URL http://api.sacredsteps.duckdns.org
ENV VITE_REDIRECT_URI http://localhost:5173
RUN npm run build
 
FROM nginx

COPY default.conf /etc/nginx/conf.d/default.conf
 
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]