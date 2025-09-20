import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Simple test component
const TestApp = () => {
  return React.createElement('div', {
    style: {
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      fontSize: '18px',
      fontFamily: 'Arial, sans-serif'
    }
  }, 
    React.createElement('h1', { style: { color: '#333', marginBottom: '20px' } }, '🎉 Acadease is Working!'),
    React.createElement('p', { style: { color: '#666', marginBottom: '10px' } }, '✅ React is rendering correctly'),
    React.createElement('p', { style: { color: '#666', marginBottom: '10px' } }, '✅ Vite development server is running'),
    React.createElement('p', { style: { color: '#666', marginBottom: '20px' } }, '✅ All systems operational'),
    React.createElement('div', { 
      style: { 
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '10px 20px', 
        borderRadius: '5px',
        display: 'inline-block',
        cursor: 'pointer'
      },
      onClick: () => alert('Button clicked! Everything is working!')
    }, 'Test Button - Click Me!')
  );
};

ReactDOM.render(
  React.createElement(React.StrictMode, null,
    React.createElement(TestApp, null)
  ),
  document.getElementById("root")
);