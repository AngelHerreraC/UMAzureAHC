FROM node:23

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ./app-um/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY ./app-um .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm","run","dev"]

# npx create-next-app@latest
# npm run dev