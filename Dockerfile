FROM nginx:alpine

COPY toasting_device.html /usr/share/nginx/html/index.html
COPY toasting_device.css  /usr/share/nginx/html/toasting_device.css

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
