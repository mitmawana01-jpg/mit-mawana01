
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const startApp = () => {
  const container = document.getElementById('root');
  if (!container) return;

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("MIT App: Booted Successfully");
  } catch (err) {
    console.error("React Render Error:", err);
    container.innerHTML = `
      <div style="padding: 40px; color: #b91c1c; font-family: sans-serif;">
        <h1 style="font-size: 24px; font-weight: bold;">Application Error</h1>
        <p>Details: ${err instanceof Error ? err.message : String(err)}</p>
      </div>
    `;
  }
};

// Ensure DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
