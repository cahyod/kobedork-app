# KOBEDORK Installation Guide (v1.1)

This guide will help you set up and run the KOBEDORK application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher)
- **npm** (usually comes with Node.js) or **yarn**

You can check if you have these installed by running:

```bash
node --version
npm --version
```

If Node.js is not installed, you can download it from [nodejs.org](https://nodejs.org/).

## Installation Steps

### 1. Clone or Download the Repository

If you have the project files, navigate to the project directory:

```bash
cd /path/to/kobedork/kobedork-app
```

### 2. Install Dependencies

Install all required packages by running:

```bash
npm install
```

This will install all dependencies listed in `package.json`.

> **Note**: If you prefer using yarn, you can run `yarn install` instead of `npm install`.

### 3. Verify Installation

After installation, you can verify that everything is set up correctly by checking the contents of your `node_modules` folder:

```bash
ls node_modules
```

You should see several packages including `react`, `vite`, and others.

## Running the Application

### Development Mode

To run the application in development mode with hot reloading:

```bash
npm run dev
```

This will start a development server, typically at `http://localhost:3000`, and automatically open the application in your default browser.

> **Note**: If port 3000 is already in use, the application will try another port (e.g., 3001, 3002, etc.) and will show the correct URL in the terminal output.

### Production Build

To create a production-ready build of the application:

```bash
npm run build
```

This will create an optimized build in the `dist/` directory that can be deployed to a web server.

To preview the production build locally:

```bash
npm run preview
```

## Version 1.1 Features

KOBEDORK v1.1 includes several important improvements:

- **Enhanced Dork Templates**: Improved queries across all 7 categories with more effective search patterns
- **Better Query Building**: Fixed operator application logic for more accurate dork construction
- **Added Copy Functionality**: One-click copying of generated queries with notification feedback
- **Expanded Coverage**: More comprehensive templates for credentials, sensitive files, and error detection
- **Improved Error Handling**: Better error handling for clipboard operations and user feedback

## Configuration

The application uses default configurations that should work out of the box. However, if you need to adjust settings:

- Server port and other development settings can be modified in `vite.config.js`
- Styling is handled through Tailwind CSS with configuration in `tailwind.config.js`
- Application data is stored in the browser's localStorage by default

## Troubleshooting

### Common Issues

**Issue**: Command not found errors when running npm commands
- **Solution**: Ensure Node.js and npm are properly installed and in your system's PATH

**Issue**: Port already in use error
- **Solution**: The application will automatically try another port. Check the terminal output for the correct URL.

**Issue**: Dependencies not installing correctly
- **Solution**: Try clearing the npm cache with `npm cache clean --force` and reinstalling

**Issue**: Application fails to compile
- **Solution**: Verify all required dependencies are installed with `npm install`

**Issue**: Copy functionality not working
- **Solution**: Ensure you are using a modern browser that supports the Clipboard API (Chrome 66+, Firefox 63+, Safari 13.1+)

### Browser Compatibility

KOBEDORK works with modern browsers (v1.1 features enhanced):
- Chrome 76+ (Clipboard API support)
- Firefox 68+ (Clipboard API support)
- Safari 13.1+ (Clipboard API support)
- Edge 79+ (Clipboard API support)

## Updating

The application uses semantic versioning. To update to the latest version (when available), simply run:

```bash
npm install kobedork@latest
```

Or to update dependencies to their latest compatible versions:

```bash
npm update
```

## Deployment

The application is designed to be deployed as a static site and works well with platforms like:

- Vercel
- Netlify
- GitHub Pages
- Any web server capable of serving static files

For deployment, use the production build created with `npm run build` and serve the contents of the `dist/` folder.

## Need Help?

If you encounter any issues during installation or setup, please check:

1. Ensure all prerequisites are installed and up to date
2. Verify your Node.js and npm versions are compatible
3. Check the terminal output for specific error messages
4. Refer to the README.md for additional information

For additional support, you may want to check the project repository for issues or reach out to the development team.