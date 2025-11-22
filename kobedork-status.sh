#!/bin/bash

# KOBEDORK Application Status Check Script
# This script checks if the KOBEDORK development server is running

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Checking KOBEDORK Application Status...${NC}"

# Check for Vite processes (the default port is 3000, but it can change)
VITE_PIDS=$(pgrep -f "vite" 2>/dev/null)

if [ -z "$VITE_PIDS" ]; then
    # If no vite process found, check for node processes running vite
    VITE_PIDS=$(pgrep -f "node.*vite" 2>/dev/null)
fi

if [ -z "$VITE_PIDS" ]; then
    echo -e "${YELLOW}KOBEDORK application is NOT running.${NC}"
    exit 0
else
    echo -e "${GREEN}KOBEDORK application is running!${NC}"
    echo -e "${GREEN}Process IDs:${NC}"
    for pid in $VITE_PIDS; do
        echo "  - PID: $pid"
        # Get the command line for the process
        CMDLINE=$(ps -p $pid -o args= 2>/dev/null)
        if [ $? -eq 0 ]; then
            echo "    Command: $CMDLINE"
        fi
    done
    
    # Check the ports being used by these processes
    echo -e "\n${GREEN}Port information:${NC}"
    for pid in $VITE_PIDS; do
        PORTS=$(lsof -p $pid -i -P -n 2>/dev/null | grep LISTEN | awk '{print $9}' | cut -d: -f2)
        if [ ! -z "$PORTS" ]; then
            for port in $PORTS; do
                echo "  - Process $pid listening on port: $port"
            done
        else
            # Fallback: try to check if common ports are in use by any process
            COMMON_PORTS="3000 3001 3002 5173 4173"
            for port in $COMMON_PORTS; do
                if lsof -i:$port -sTCP:LISTEN -t >/dev/null 2>&1; then
                    # Check if this port is actually used by the vite process
                    if lsof -p $pid -i:$port -t >/dev/null 2>&1; then
                        echo "  - Process $pid listening on port: $port"
                    fi
                fi
            done
        fi
    done
fi

# Also check if this is running in the project directory
if [ -f "package.json" ]; then
    PROJECT_NAME=$(grep -o '"name": *"[^"]*"' package.json | cut -d'"' -f4 2>/dev/null)
    if [ ! -z "$PROJECT_NAME" ] && [ "$PROJECT_NAME" = "kobedork" ]; then
        echo -e "\n${GREEN}Verified: This is the KOBEDORK project directory.${NC}"
    fi
fi

echo -e "\n${GREEN}Status check completed.${NC}"