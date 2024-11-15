# Step 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory to the current directory (frontend)
WORKDIR /frontend

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use Nginx to serve the React build files
FROM nginx:alpine AS production

# Copy the custom nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the React build output to Nginx's default directory
COPY --from=build /frontend/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
