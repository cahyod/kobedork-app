# KOBEDORK Version History

## v1.1 (Current) - November 2025

### Enhancements
- **Enhanced Dork Templates**: Refined all 7 categories with more effective and comprehensive queries using better search patterns
  - Directory Listing & File Exposure: Improved index of queries with consistent capitalization
  - Login / Admin / Panel: Added comprehensive OR patterns for login detection
  - Error, Debug, Warning: Combined related error types for more comprehensive searches
  - Sensitive Files: Expanded file extension searches with OR patterns
  - Source Code Exposure: Added more programming language extensions and source patterns
  - Credentials / Keys / Secrets: Made credential searches more comprehensive using OR operators
  - Misc & Advanced Dorks: Expanded with more diverse security-related searches

### Bug Fixes
- **Fixed Query Building Logic**: Corrected fundamental flaw where operators would replace entire queries instead of properly combining with templates
- **Improved Operator Application**: Fixed how operators are applied to ensure proper combination with selected templates

### New Features
- **Copy Functionality**: Added copy button in Dork Builder with notification feedback
- **Better Error Handling**: Implemented proper error handling for clipboard operations
- **Notification System Integration**: Copy functionality now uses the app's existing notification system

### Improvements
- Better user experience with notification feedback
- More effective dork queries with improved search patterns
- Enhanced UI with additional copy button in query builder
- Better browser compatibility checking for Clipboard API

---

## v1.0 - Initial Release

### Features
- **Dork Categories**: 7 predefined categories for common vulnerability types
- **Real-time Query Builder**: Build and preview queries as you create them
- **Multi-Search Engine Support**: Execute queries on Google, Bing, and DuckDuckGo
- **Favorites System**: Save and manage your most useful dorks
- **History Tracking**: Keep a record of executed queries
- **Advanced Options**: Custom operators and site-specific searching
- **Dark/Light Theme**: Choose your preferred viewing mode
- **Client-Side Only**: No backend required - all data stored in browser
- **100+ Predefined Dorks**: Comprehensive set of security testing queries