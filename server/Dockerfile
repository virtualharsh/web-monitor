FROM node:18

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally (optional but cleaner)
RUN npm install -g nodemon

# Copy the rest of your server files
COPY . .

EXPOSE 5000

# Run using nodemon
CMD ["npm", "run", "dev"]
