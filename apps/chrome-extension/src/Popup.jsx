import React from 'react';

function Popup() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-blue-600 mb-2">Hello World!</h1>
      <p className="text-gray-700">This is your React Chrome Extension Popup.</p>
      <button
        onClick={() => alert('React button clicked!')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Click me
      </button>
    </div>
  );
}

export default Popup;