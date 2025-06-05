#!/bin/bash

echo "🔧 Setting up your TypeScript Playwright test project..."

# Install dependencies
echo "Installing npm dependencies..."
npm install

# Install Playwright browsers
npx playwright install

echo "✅ Setup complete."

# Run tests
echo "▶️ Running Playwright tests..."
npx playwright test

echo "📄 Playwright HTML report generated at: playwright-report/index.html"



