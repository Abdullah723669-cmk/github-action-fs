# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copy app files
COPY . .

# Expose port and run the app
EXPOSE 3000

CMD ["yarn", "start"]
