#we will building off a node.js image
#stage 1 - building the file
FROM node:latest as build-stage

#making a new directory
RUN mkdir /usr/app

#copying everything from the current folder over to this new one
COPY . /usr/app

#making this the working directory
WORKDIR /usr/app

RUN npm install

RUN npm run build



#Adding the local ode_modules to PATH
ENV PATH=/usr/app/node_modules/.bin:$PATH

#stage 2 - serving the docker file using nginx
#getting the image
FROM nginx:alpine
#setting the working directory
WORKDIR /usr/share/nginx/html

#removing the default stuff
RUN rm -rf ./*

#copying everything from the og build environment to the final image
COPY --from=build-stage /usr/app/dist .
#running the nginx server
ENTRYPOINT ["nginx", "-g", "daemon off;"]











