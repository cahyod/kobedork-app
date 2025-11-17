/**
 * Search Engine Module
 * Generates search URLs for different search engines
 */

/**
 * Gets the search URL for the specified engine and query
 * @param {string} engine - The search engine (google, bing, duckduckgo)
 * @param {string} query - The search query
 * @returns {string} The complete search URL
 */
export function getSearchUrl(engine, query) {
  const encodedQuery = encodeURIComponent(query);
  
  switch(engine) {
    case 'google':
      return `https://www.google.com/search?q=${encodedQuery}`;
    case 'bing':
      return `https://www.bing.com/search?q=${encodedQuery}`;
    case 'duckduckgo':
      return `https://duckduckgo.com/?q=${encodedQuery}`;
    default:
      // Default to Google
      return `https://www.google.com/search?q=${encodedQuery}`;
  }
}

/**
 * Gets all supported search engines
 * @returns {Array} Array of supported engines
 */
export function getSupportedEngines() {
  return [
    { id: 'google', name: 'Google', baseUrl: 'https://www.google.com/search?q=' },
    { id: 'bing', name: 'Bing', baseUrl: 'https://www.bing.com/search?q=' },
    { id: 'duckduckgo', name: 'DuckDuckGo', baseUrl: 'https://duckduckgo.com/?q=' }
  ];
}