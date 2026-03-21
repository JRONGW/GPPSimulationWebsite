FROM nginx:alpine

COPY toasting_device.html /usr/share/nginx/html/index.html
COPY toasting_device.css  /usr/share/nginx/html/toasting_device.css
COPY toasting_device.js  /usr/share/nginx/html/toasting_device.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
