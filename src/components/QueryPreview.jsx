import React from 'react';

const QueryPreview = ({ query, onRunQuery, onCopyQuery, isRunDisabled = false }) => {
  const handleCopy = async () => {
    if (query) {
      await navigator.clipboard.writeText(query);
      onCopyQuery && onCopyQuery();
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Query Preview
        </label>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!query}
          className={`text-sm px-3 py-1 rounded ${
            query
              ? 'text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-700'
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          Copy
        </button>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md border border-gray-200 dark:border-gray-600 min-h-[80px]">
        {query ? (
          <div className="font-mono text-gray-800 dark:text-gray-200 break-words">
            {query}
          </div>
        ) : (
          <div className="text-gray-400 italic">Your query will appear here...</div>
        )}
      </div>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={onRunQuery}
          disabled={!query || isRunDisabled}
          className={`btn btn-primary flex-1 ${
            !query || isRunDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Run Query
        </button>
      </div>
    </div>
  );
};

export default QueryPreview;