# Use official Playwright image (with browsers preinstalled)
FROM mcr.microsoft.com/playwright:focal

ENV DOCKER=true

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# (Optional) Run Playwright install for browsers — usually included in base image
RUN npx playwright install --with-deps

# Default command to run tests
CMD ["npx", "playwright", "test", "-g", "@login", "--max-failures=2", "--output", "test-results"]
