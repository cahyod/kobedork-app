# KOBEDORK Management Scripts

This directory contains management scripts for the KOBEDORK application:

## Available Scripts

- `kobedork-start.sh` - Start the KOBEDORK development server
- `kobedork-status.sh` - Check the status of the KOBEDORK application
- `kobedork-stop.sh` - Stop the running KOBEDORK application

## Usage

### Starting the Application
```bash
./kobedork-start.sh
```

### Checking Application Status
```bash
./kobedork-status.sh
```

### Stopping the Application
```bash
./kobedork-stop.sh
```

## Notes

- These scripts are designed to be run from the project root directory
- Make sure Node.js and npm are installed before running these scripts
- The start script will automatically install dependencies if node_modules is missing
- The stop script will attempt graceful shutdown first, then forceful termination if needed