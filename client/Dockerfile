# client/Dockerfile
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install dependencies first (use cache)
COPY package.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Vite's dev server port
EXPOSE 5173

# Run the dev server with host set to 0.0.0.0
CMD ["npm", "run", "dev"]
