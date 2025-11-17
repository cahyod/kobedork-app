import React from 'react';
import { getCategories } from '../modules/dorkBuilder';

const CategorySelect = ({ selectedCategory, onCategoryChange }) => {
  const categories = getCategories();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Dork Category
      </label>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="input w-full"
      >
        <option value="">Select a category...</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {categories.find(cat => cat.id === selectedCategory)?.description}
        </p>
      )}
    </div>
  );
};

export default CategorySelect;