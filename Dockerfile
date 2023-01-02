FROM node:16-alpine AS build
WORKDIR /build
COPY . ./

RUN npm install
RUN npm run build

FROM node:16-alpine AS app
WORKDIR /app

COPY --from=build /build/next.config.js ./
COPY --from=build /build/package.json ./
COPY --from=build /build/public public
COPY --from=build /build/.next .next
COPY --from=build /build/node_modules node_modules
EXPOSE 3000

CMD ["npm", "start"]
