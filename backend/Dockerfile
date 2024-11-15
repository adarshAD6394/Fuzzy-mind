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
COPY --from=build /Fuzzy-mind/frontend/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the container
EXPOSE 80 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

