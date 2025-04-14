#we will building off a node.js image
FROM node:latest

#the work directory should be in a subfolder of the image

#we want to copy over the package.json file to the root of the working directory of the docker container
#which in this case is /app

COPY package.json .

#now we will install all the package dependencies in the package.json file
RUN npm install

#now we want to copy the rest of the src files over
#we want to put in the same working directory which is the /app folder
COPY src .

#now we want to expose the port the application is running on
EXPOSE 5173
#now we want to actually run the react application inside the container
CMD ["npm", "start"]
