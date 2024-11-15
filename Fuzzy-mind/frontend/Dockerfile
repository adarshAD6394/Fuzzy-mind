# Step 1: Build the React frontend
FROM node:18-alpine AS build

# Set the working directory to the frontend folder
WORKDIR /Fuzzy-mind/frontend

# Copy package files and install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the rest of the frontend code
COPY frontend/ ./

# Build the frontend project
RUN npm run build

# Step 2: Serve the built files using Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Copy the custom nginx configuration file
COPY frontend/nginx.conf /etc/nginx/nginx.conf

# Copy the React build output to Nginx's default directory
COPY --from=build /Fuzzy-mind/frontend/dist /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

