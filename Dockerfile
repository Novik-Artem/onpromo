FROM cr.yandex/crpbmdfkn58g3f0erdqr/base/dostavix-fe:latest AS builder

WORKDIR /app
COPY . .

RUN npm run generate

FROM nginx:latest AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/dist /usr/share/nginx/html
