import React, { useState, useEffect } from 'react';
import CategorySelect from './CategorySelect';
import EngineSelector from './EngineSelector';
import QueryPreview from './QueryPreview';
import { buildDork, getCategoryTemplates } from '../modules/dorkBuilder';
import { getSearchUrl } from '../modules/searchEngine';

const DorkBuilder = ({ onSaveToHistory, onSaveToFavorite, onRunExternalQuery, showNotification }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [operator, setOperator] = useState('');
  const [site, setSite] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('google');
  const [query, setQuery] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Update query whenever inputs change
  useEffect(() => {
    if (selectedCategory) {
      const newQuery = buildDork(selectedCategory, keyword, { operator, site });
      setQuery(newQuery);
    } else {
      setQuery('');
    }
  }, [selectedCategory, keyword, operator, site]);

  const handleRunQuery = () => {
    if (query) {
      const searchUrl = getSearchUrl(selectedEngine, query);
      // Open in new tab
      window.open(searchUrl, '_blank');

      // Save to history
      onSaveToHistory({
        query,
        engine: selectedEngine,
        category: selectedCategory
      });
    }
  };

  const handleSaveFavorite = () => {
    if (query) {
      onSaveToFavorite({
        query,
        engine: selectedEngine,
        category: selectedCategory
      });
    }
  };

  const handleCopyQuery = async () => {
    if (query) {
      try {
        await navigator.clipboard.writeText(query);
        if (showNotification) {
          showNotification('Query copied to clipboard!');
        } else {
          console.log('Query copied to clipboard!');
        }
      } catch (err) {
        console.error('Failed to copy query: ', err);
        if (showNotification) {
          showNotification('Failed to copy query to clipboard');
        }
      }
    }
  };

  const handleUseTemplate = (template) => {
    const processedTemplate = template.replace(/TARGET/g, keyword);
    setQuery(processedTemplate);
  };

  const operators = [
    { value: '', label: 'None' },
    { value: 'site', label: 'site:' },
    { value: 'inurl', label: 'inurl:' },
    { value: 'intitle', label: 'intitle:' },
    { value: 'filetype', label: 'filetype:' },
    { value: 'intext', label: 'intext:' },
  ];

  // Get templates for selected category
  const categoryTemplates = selectedCategory ? getCategoryTemplates(selectedCategory) : [];

  return (
    <div className="flex flex-col h-full">
      {/* LEFT PANEL - Input Form */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Dork Builder</h2>

        <CategorySelect
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Target Domain
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="example.com"
            className="input w-full"
          />
        </div>

        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 mb-3"
        >
          {showAdvanced ? 'Hide' : 'Show'} Advanced Options
        </button>

        {showAdvanced && (
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Operator
              </label>
              <select
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                className="input w-full"
              >
                {operators.map(op => (
                  <option key={op.value} value={op.value}>{op.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Site (optional)
              </label>
              <input
                type="text"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                placeholder="example.com"
                className="input w-full"
              />
            </div>
          </div>
        )}

        <EngineSelector
          selectedEngine={selectedEngine}
          onEngineChange={setSelectedEngine}
        />

        <div className="flex gap-3 mt-4">
          <button
            type="button"
            onClick={handleRunQuery}
            disabled={!query}
            className={`btn btn-primary flex-1 ${
              !query ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Run Query
          </button>

          <button
            type="button"
            onClick={handleCopyQuery}
            disabled={!query}
            className={`btn btn-secondary ${
              !query ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Copy
          </button>

          <button
            type="button"
            onClick={handleSaveFavorite}
            disabled={!query}
            className={`btn btn-ghost ${
              !query ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            ★ Add Favorite
          </button>
        </div>
      </div>

      {/* RIGHT PANEL - Preview and Template Variants */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white">Preview Dork</h3>

        <div className="dork-preview mb-4 min-h-[60px]">
          {query ? query : <span className="text-slate-500">Your query will appear here...</span>}
        </div>

        <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white">Template Variants</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {categoryTemplates.length > 0 ? (
            categoryTemplates.map((template, index) => {
              const processedTemplate = template.replace(/TARGET/g, keyword || 'TARGET');
              return (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer font-mono text-sm"
                  onClick={() => handleUseTemplate(template)}
                >
                  {processedTemplate}
                </div>
              );
            })
          ) : (
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 text-center py-4">
              Select a category to see available templates
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DorkBuilder;