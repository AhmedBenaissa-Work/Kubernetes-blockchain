# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Install Ganache CLI
RUN npm install -g ganache-cli

# Expose Ganache's default port
EXPOSE 8545

ENV CHAIN_ID=1235

# Run Ganache with the custom chain ID
CMD ["ganache-cli", "--networkId", "${CHAIN_ID}", "--port", "8545", "--host", "0.0.0.0"]

