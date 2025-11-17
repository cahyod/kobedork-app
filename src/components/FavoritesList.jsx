import React from 'react';

const FavoritesList = ({ favorites, onRunQuery, onDeleteFavorite }) => {
  if (!favorites || favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-1">Belum ada favorite</h3>
        <p className="text-slate-600 dark:text-slate-400">Klik ikon bintang untuk menyimpan dork ke favorites</p>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {favorites.map((fav) => (
          <div
            key={fav.id}
            className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex justify-between items-center"
          >
            <div
              className="font-mono text-sm text-slate-800 dark:text-slate-200 flex-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 mr-3"
              onClick={() => onRunQuery(fav.query, fav.engine)}
              title="Click to run this query"
            >
              ★ {fav.query.length > 60 ? fav.query.substring(0, 60) + '...' : fav.query}
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => onRunQuery(fav.query, fav.engine)}
                className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800"
              >
                Run
              </button>
              <button
                type="button"
                onClick={() => onDeleteFavorite(fav.id)}
                className="text-sm px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-300 dark:hover:bg-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;