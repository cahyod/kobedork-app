/**
 * Storage Module
 * Handles saving and loading favorites and history to localStorage
 */

const FAVORITES_KEY = 'kobedork_favorites';
const HISTORY_KEY = 'kobedork_history';

/**
 * Saves a dork to favorites
 * @param {object} dork - The dork object to save
 */
export function saveFavorite(dork) {
  const favorites = loadFavorites();
  // Add ID if not present
  if (!dork.id) {
    dork.id = Date.now().toString();
  }
  // Add timestamp if not present
  if (!dork.createdAt) {
    dork.createdAt = new Date().toISOString();
  }
  favorites.push(dork);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

/**
 * Loads all favorites
 * @returns {Array} Array of favorite dorks
 */
export function loadFavorites() {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

/**
 * Deletes a favorite by ID
 * @param {string} id - The ID of the favorite to delete
 */
export function deleteFavorite(id) {
  const favorites = loadFavorites();
  const updated = favorites.filter(fav => fav.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

/**
 * Saves a query to history
 * @param {object} dork - The dork object to save to history
 */
export function saveHistory(dork) {
  const history = loadHistory();
  // Add ID if not present
  if (!dork.id) {
    dork.id = Date.now().toString();
  }
  // Add timestamp if not present
  if (!dork.runAt) {
    dork.runAt = new Date().toISOString();
  }
  history.unshift(dork); // Add to the beginning
  // Limit history to 100 items
  if (history.length > 100) {
    history.length = 100;
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

/**
 * Loads all history
 * @returns {Array} Array of historical dorks
 */
export function loadHistory() {
  const stored = localStorage.getItem(HISTORY_KEY);
  return stored ? JSON.parse(stored) : [];
}

/**
 * Clears all history
 */
export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
}

/**
 * Checks if a query is already in favorites
 * @param {string} query - The query string to check
 * @returns {boolean} True if the query exists in favorites
 */
export function isFavorite(query) {
  const favorites = loadFavorites();
  return favorites.some(fav => fav.query === query);
}