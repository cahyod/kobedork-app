import React from 'react';
import { getSupportedEngines } from '../modules/searchEngine';

const EngineSelector = ({ selectedEngine, onEngineChange }) => {
  const engines = getSupportedEngines();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        Search Engine
      </label>
      <div className="segmented-control">
        {engines.map((engine) => (
          <button
            key={engine.id}
            type="button"
            onClick={() => onEngineChange(engine.id)}
            className={`segmented-option w-full ${
              selectedEngine === engine.id ? 'active' : ''
            }`}
          >
            {engine.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EngineSelector;