import React from 'react';

const HistoryList = ({ history, onRunQuery, onClearHistory }) => {
  if (!history || history.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-1">Belum ada history</h3>
        <p className="text-slate-600 dark:text-slate-400">History pencarianmu akan muncul di sini</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div></div> {/* Empty div to maintain space for the clear button on the right */}
        <button
          type="button"
          onClick={onClearHistory}
          className="text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400 px-3 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          Clear All
        </button>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {history.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex justify-between items-center"
          >
            <div
              className="font-mono text-sm text-slate-800 dark:text-slate-200 flex-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 mr-3"
              onClick={() => onRunQuery(item.query, item.engine)}
              title="Click to run this query again"
            >
              {item.query.length > 60 ? item.query.substring(0, 60) + '...' : item.query}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                {new Date(item.runAt).toLocaleString()}
              </span>
              <button
                type="button"
                onClick={() => onRunQuery(item.query, item.engine)}
                className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800"
              >
                Run Again
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;