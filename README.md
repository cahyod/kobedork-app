# KOBEDORK - Advanced Search Dorking Utility (v1.1)

KOBEDORK is a powerful web-based tool designed for security researchers and bug bounty hunters to create, build, and execute search dorks on major search engines. A "dork" is a search query that uses special operators to find specific types of information on the internet, often used in security research to identify potential vulnerabilities or exposed data.

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

## Project Structure

```
kobedork-app/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── app.js (main application component)
│   ├── components/ (UI components)
│   ├── modules/ (business logic)
│   ├── data/ (dork categories data)
│   ├── styles/ (global styles)
│   └── pages/ (application pages)
```

## Version 1.1 Improvements

- **Enhanced Dork Templates**: Refined all 7 categories with more effective and comprehensive queries using better search patterns
- **Improved Query Building**: Fixed operator application logic to properly combine operators with templates
- **Better Copy Functionality**: Added copy button with notification feedback
- **Expanded Search Coverage**: More comprehensive templates for credentials, sensitive files, and error detection
- **Better Error Handling**: Proper handling of clipboard operations and error reporting

## Legal Disclaimer

This tool is provided for educational and research purposes only. The developers are not responsible for any misuse of this tool or any resulting damages. Please ensure you have proper authorization before testing any systems and always comply with applicable laws and regulations.

Use responsibly and ethically. Remember that unauthorized access to computer systems is illegal in many jurisdictions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.