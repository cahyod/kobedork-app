#!/bin/bash

# KOBEDORK Application Start Script
# This script starts the KOBEDORK development server

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting KOBEDORK Application...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if project directory exists
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Please run this script from the project root directory.${NC}"
    exit 1
fi

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}node_modules not found, installing dependencies...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}Error: Failed to install dependencies.${NC}"
        exit 1
    fi
    echo -e "${GREEN}Dependencies installed successfully.${NC}"
fi

# Check if another instance is already running
if pgrep -f "vite" > /dev/null; then
    echo -e "${YELLOW}Warning: Another Vite server instance might be running.${NC}"
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}Operation cancelled.${NC}"
        exit 0
    fi
fi

echo -e "${GREEN}Starting KOBEDORK development server...${NC}"
echo -e "${YELLOW}Note: The server will run in the foreground. Press Ctrl+C to stop.${NC}"

# Start the development server
npm run dev

if [ $? -eq 0 ]; then
    echo -e "${GREEN}KOBEDORK application started successfully!${NC}"
else
    echo -e "${RED}Failed to start KOBEDORK application.${NC}"
    exit 1
fi