/**
 * Dork Builder Module
 * Handles the construction of dork queries based on category, keyword, and operator
 */

// Load categories from data file
import categoriesData from '../data/categories.json';

/**
 * Builds a dork query based on the selected category, keyword, and optional operator
 * @param {string} category - The selected category ID
 * @param {string} keyword - The keyword to search for (typically a domain)
 * @param {object} options - Additional options like operator and site
 * @returns {string} The built dork query
 */
export function buildDork(category, keyword, options = {}) {
  const { operator = '', site = '' } = options;

  // Find the selected category
  const selectedCategory = categoriesData.categories.find(cat => cat.id === category);

  if (!selectedCategory) {
    return '';
  }

  // If no keyword is provided, return the first template with 'TARGET' as placeholder
  if (!keyword || keyword.trim() === '') {
    return selectedCategory.templates[0] || '';
  }

  // Get the base template and replace 'TARGET' with the keyword
  let baseTemplate = selectedCategory.templates[0] || '';
  let query = baseTemplate.replace(/TARGET/g, keyword);

  // Apply operator if provided, modifying the entire query appropriately
  if (operator) {
    if (site) {
      // If site is specified, apply the operator to the site and append the original query
      query = `${operator}:${site} ${query}`;
    } else {
      // Otherwise apply the operator to the keyword part of the query
      // Extract just the keyword from query to apply the operator to it
      query = `${operator}:${keyword} ${query.replace(keyword, '').trim()}`;
    }
  }

  return query;
}

/**
 * Gets all available categories
 * @returns {Array} Array of category objects
 */
export function getCategories() {
  return categoriesData.categories;
}

/**
 * Gets template by category ID
 * @param {string} categoryId
 * @returns {string} The first template for the category
 */
export function getTemplateByCategory(categoryId) {
  const category = categoriesData.categories.find(cat => cat.id === categoryId);
  return category ? category.templates[0] : '';
}

/**
 * Gets all templates for a specific category
 * @param {string} categoryId
 * @returns {Array} Array of templates for the category
 */
export function getCategoryTemplates(categoryId) {
  const category = categoriesData.categories.find(cat => cat.id === categoryId);
  return category ? category.templates : [];
}