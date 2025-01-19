# Using Node.js Debian Bullseye Slim base image
FROM node:20.16-bullseye-slim

# Set the user to root to perform installation operations
USER root

# Install necessary packages
RUN apt-get update && apt-get install -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# User and group setup
RUN groupadd -r www && useradd -r -u 2000 -g www www && \
    mkdir -p /home/www/app && \
    chown -R www:www /home/www

# Set the working directory for subsequent instructions
WORKDIR /home/www/app

# Copy application source code with appropriate ownership settings
COPY --chown=www:www . .

# Switch to the non-root user
USER www

# Remove node_modules, Install production dependencies and Build the application which creates the dist folder
RUN npm install

# Start the Node.js application using the start:prod command
CMD ["npm", "run", "dev"]