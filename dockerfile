# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Install Ganache CLI
RUN npm install -g ganache-cli

# Expose Ganache's default port
EXPOSE 8545

# Command to start Ganache
CMD ["ganache-cli", "--host", "0.0.0.0"]
