# Use official Node.js image as base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["yarn", "dev", "--host"]
