#!/bin/bash

echo "🔧 Setting up your TypeScript Playwright test project..."

# Install dependencies
echo "Installing npm dependencies..."
npm install

# Install Playwright browsers
npx playwright install

echo "✅ Setup complete."
echo "📄 Playwright HTML report generated at: playwright-report/index.html"
echo "To open it, run: <npx playwright show-report>"

# Run tests
echo "▶️ Running Playwright tests..."
npx playwright test


