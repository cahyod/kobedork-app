import React, { useState, useEffect } from 'react';
import DorkBuilder from './components/DorkBuilder';
import FavoritesList from './components/FavoritesList';
import HistoryList from './components/HistoryList';
import ThemeToggle from './components/ThemeToggle';
import { saveFavorite, loadFavorites, deleteFavorite, saveHistory, loadHistory, clearHistory, isFavorite } from './modules/storage';
import { getSearchUrl } from './modules/searchEngine';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('builder'); // 'builder', 'favorites', 'history'
  const [notification, setNotification] = useState('');

  // Load data on initial render
  useEffect(() => {
    setFavorites(loadFavorites());
    setHistory(loadHistory());
  }, []);

  const handleSaveToFavorite = (dork) => {
    // Check if already favorited
    if (!isFavorite(dork.query)) {
      saveFavorite(dork);
      setFavorites(loadFavorites());
      showNotification('Query added to favorites!');
    } else {
      showNotification('Query is already in favorites!');
    }
  };

  const handleSaveToHistory = (dork) => {
    saveHistory(dork);
    setHistory(loadHistory());
  };

  const handleDeleteFavorite = (id) => {
    deleteFavorite(id);
    setFavorites(loadFavorites());
    showNotification('Favorite removed!');
  };

  const handleClearHistory = () => {
    clearHistory();
    setHistory([]);
    showNotification('History cleared!');
  };

  const handleRunExternalQuery = (query, engine) => {
    if (query) {
      const searchUrl = getSearchUrl(engine || 'google', query);
      window.open(searchUrl, '_blank');

      // Save to history
      saveHistory({
        query,
        engine: engine || 'google',
      });
      setHistory(loadHistory());
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="theme-transition min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-50">
      {/* TOP NAVBAR */}
      <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">KOBEDORK</div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveTab('favorites')}
              className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
            >
              Favorites
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
            >
              History
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
          {notification}
        </div>
      )}

      {/* Main Layout */}
      <div className="container mx-auto px-4 py-6 flex">
        {/* LEFT PANEL - Sidebar */}
        <div className="w-72 pr-6 hidden md:block">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('builder')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'builder'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <div className="font-medium">Dork Builder</div>
              <div className="text-sm opacity-75">Create new dorks</div>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'favorites'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <div className="font-medium">Favorites</div>
              <div className="text-sm opacity-75">{favorites.length} saved</div>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'history'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <div className="font-medium">History</div>
              <div className="text-sm opacity-75">{history.length} items</div>
            </button>
          </nav>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-sm">
            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">About KOBEDORK</h3>
            <p className="text-blue-700 dark:text-blue-300">
              A tool for security researchers and bug bounty hunters to create, build, and execute search dorks on Google, Bing, and DuckDuckGo.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {activeTab === 'builder' && (
            <DorkBuilder
              onSaveToFavorite={handleSaveToFavorite}
              onSaveToHistory={handleSaveToHistory}
              onRunExternalQuery={handleRunExternalQuery}
              showNotification={showNotification}
            />
          )}

          {activeTab === 'favorites' && (
            <div className="card">
              <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Your Favorites</h2>
              <FavoritesList
                favorites={favorites}
                onRunQuery={handleRunExternalQuery}
                onDeleteFavorite={handleDeleteFavorite}
              />
            </div>
          )}

          {activeTab === 'history' && (
            <div className="card">
              <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Search History</h2>
              <HistoryList
                history={history}
                onRunQuery={handleRunExternalQuery}
                onClearHistory={handleClearHistory}
              />
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
        <p>KOBEDORK - Advanced Search Dorking Utility v1.0</p>
        <p className="mt-1">For security research and bug bounty purposes only</p>
        <p className="mt-2">Supported by: <a href="https://cybersecurity.or.id/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">Cybersecurity Indonesia</a></p>
      </footer>
    </div>
  );
}

export default App;