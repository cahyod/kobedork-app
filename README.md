# KOBEDORK - Advanced Search Dorking Utility (v1.1)

KOBEDORK is a powerful web-based tool designed for security researchers and bug bounty hunters to create, build, and execute search dorks on major search engines. A "dork" is a search query that uses special operators to find specific types of information on the internet, often used in security research to identify potential vulnerabilities or exposed data.

## Table of Contents
- [Features](#features)
- [Application Interface](#application-interface)
- [How It Works](#how-it-works)
- [Use Cases](#use-cases)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Version History](#version-history)
- [Legal Disclaimer](#legal-disclaimer)
- [Support](#support)
- [License](#license)

## Features

- **Dork Categories**: Predefined categories for common vulnerability types (Directory Listing, Login Panels, Errors, Sensitive Files, etc.)
- **Real-time Query Builder**: Build and preview queries as you create them
- **Multi-Search Engine Support**: Execute queries on Google, Bing, and DuckDuckGo
- **Favorites System**: Save and manage your most useful dorks
- **History Tracking**: Keep a record of executed queries
- **Advanced Options**: Custom operators and site-specific searching
- **Dark/Light Theme**: Choose your preferred viewing mode
- **Client-Side Only**: No backend required - all data stored in browser
- **Enhanced Dork Templates**: Improved 100+ predefined dorks with better accuracy and comprehensive coverage
- **Copy Functionality**: One-click copying of generated queries to clipboard
- **Better Error Handling**: Improved user experience with proper notifications

## Application Interface

![KOBEDORK Application Interface](docs/app-interface.png)

*The application features a modern UI with dork categories on the left, query builder in the center, and template variants on the right, with support for Google, Bing, and DuckDuckGo search engines.*

## How It Works

KOBEDORK generates search queries using special Google/Bing/DuckDuckGo operators that help find security vulnerabilities, exposed sensitive information, login panels, and other potentially interesting resources on the internet. The tool doesn't perform actual scanning or exploitation - it simply builds and provides links to search queries.

## Use Cases

- Security researchers looking for potential vulnerabilities
- Bug bounty hunters seeking exposed data
- IT administrators performing internal security audits
- Penetration testers conducting reconnaissance

## Technology Stack

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- JavaScript (ES6+)
- Browser LocalStorage (data persistence)

## Installation

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (usually comes with Node.js) or **yarn**

### Installation Steps

1. Clone or download the repository
2. Navigate to the project directory: `cd kobedork-app`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

For complete installation instructions, see [INSTALLATION.md](INSTALLATION.md).

### Running the Application

- **Development Mode**: `npm run dev` (starts server at http://localhost:3000)
- **Production Build**: `npm run build` (creates optimized build in dist/ directory)
- **Preview Production Build**: `npm run preview` (preview production build locally)

## Project Structure

```
kobedork-app/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── app.jsx (main application component)
│   ├── components/ (UI components)
│   ├── modules/ (business logic)
│   ├── data/ (dork categories data)
│   ├── styles/ (global styles)
│   └── pages/ (application pages)
├── docs/ (documentation and assets)
├── DONATE.md (donation information)
├── HISTORY.md (version history)
└── INSTALLATION.md (setup instructions)
```

## Version History

### v1.1 (Current) - November 2025

#### Enhancements
- **Enhanced Dork Templates**: Refined all 7 categories with more effective and comprehensive queries using better search patterns
- **Fixed Query Building Logic**: Corrected fundamental flaw where operators would replace entire queries instead of properly combining with templates
- **Added Copy Functionality**: Added copy button in Dork Builder with notification feedback
- **Better Error Handling**: Implemented proper error handling for clipboard operations
- **Improved User Experience**: Better notification system and overall UX

### v1.0 - Initial Release
- Initial release with 7 categories and 100+ dork templates

For complete version history, see [HISTORY.md](HISTORY.md).

## Legal Disclaimer

This tool is provided for educational and research purposes only. The developers are not responsible for any misuse of this tool or any resulting damages. Please ensure you have proper authorization before testing any systems and always comply with applicable laws and regulations.

Use responsibly and ethically. Remember that unauthorized access to computer systems is illegal in many jurisdictions.

## Support

For support and documentation:
- Check [INSTALLATION.md](INSTALLATION.md) for setup instructions
- Check [HISTORY.md](HISTORY.md) for version information
- Check [DONATE.md](DONATE.md) for support options
- Contact the development team if needed

## Support KOBEDORK

KOBEDORK is a free and open-source tool. If you find it useful, consider supporting its development:

- **PayPal**: [Donate via PayPal](https://www.paypal.me/cahyodarujati)
- **Cryptocurrency Options**: Bitcoin, Ethereum, Bitcoin Cash, Litecoin, and Monero (see [DONATE.md](DONATE.md) for addresses)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Supported by: [Cybersecurity Indonesia](https://cybersecurity.or.id/)*