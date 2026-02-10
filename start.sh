#!/bin/bash

echo "🚀 Starting Astro Blog..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo ""
fi

echo "🔥 Starting development server..."
echo ""
echo "✨ Blog will be available at http://localhost:4321"
echo "🛑 Press Ctrl+C to stop"
echo ""

npm run dev
