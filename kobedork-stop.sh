#!/bin/bash

# KOBEDORK Application Stop Script
# This script stops the running KOBEDORK development server

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Stopping KOBEDORK Application...${NC}"

# Find Vite processes
VITE_PIDS=$(pgrep -f "vite" 2>/dev/null)

if [ -z "$VITE_PIDS" ]; then
    # If no vite process found, check for node processes running vite
    VITE_PIDS=$(pgrep -f "node.*vite" 2>/dev/null)
fi

if [ -z "$VITE_PIDS" ]; then
    echo -e "${YELLOW}No KOBEDORK application processes found running.${NC}"
    exit 0
else
    echo -e "${GREEN}Found KOBEDORK processes:${NC}"
    for pid in $VITE_PIDS; do
        echo "  - PID: $pid"
        CMDLINE=$(ps -p $pid -o args= 2>/dev/null)
        if [ $? -eq 0 ]; then
            echo "    Command: $CMDLINE"
        fi
    done
    
    echo -e "\n${YELLOW}Stopping processes...${NC}"
    
    # Attempt to stop each process gracefully first (SIGTERM)
    for pid in $VITE_PIDS; do
        echo -e "${YELLOW}Stopping process $pid...${NC}"
        kill -TERM $pid 2>/dev/null
        if [ $? -ne 0 ]; then
            echo -e "${RED}Failed to send SIGTERM to process $pid${NC}"
        fi
    done
    
    # Wait a short time for graceful shutdown
    sleep 2
    
    # Check if processes are still running
    STILL_RUNNING=""
    for pid in $VITE_PIDS; do
        if kill -0 $pid 2>/dev/null; then
            STILL_RUNNING="$STILL_RUNNING $pid"
        fi
    done
    
    if [ ! -z "$STILL_RUNNING" ]; then
        echo -e "${YELLOW}Some processes are still running. Forcing termination...${NC}"
        for pid in $STILL_RUNNING; do
            echo -e "${YELLOW}Force stopping process $pid...${NC}"
            kill -KILL $pid 2>/dev/null
            if [ $? -eq 0 ]; then
                echo -e "${GREEN}Process $pid forcefully stopped.${NC}"
            else
                echo -e "${RED}Failed to stop process $pid${NC}"
            fi
        done
    else
        echo -e "${GREEN}All processes stopped gracefully.${NC}"
    fi
    
    # Give a moment for ports to be released
    sleep 1
    
    echo -e "\n${GREEN}KOBEDORK application stopped successfully.${NC}"
fi

# Verify that no processes are running
VITE_PIDS=$(pgrep -f "vite" 2>/dev/null)
if [ ! -z "$VITE_PIDS" ]; then
    echo -e "${YELLOW}Warning: Some processes might still be running.${NC}"
    echo -e "${YELLOW}Please run the status script to verify.${NC}"
else
    echo -e "${GREEN}Verified: All KOBEDORK processes have been stopped.${NC}"
fi