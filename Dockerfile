# Use Node 20
FROM node:24

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "run", "dev"]