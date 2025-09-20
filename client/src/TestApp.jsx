import React from 'react';

const TestApp = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: 'blue', fontSize: '2rem' }}>🎉 React App is Working!</h1>
      <p style={{ fontSize: '1.2rem', color: 'green' }}>
        If you can see this, the React app is rendering correctly.
      </p>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2>Test Information:</h2>
        <ul>
          <li>✅ React is loading</li>
          <li>✅ JSX is working</li>
          <li>✅ Styling is applied</li>
          <li>✅ Component is rendering</li>
        </ul>
      </div>
    </div>
  );
};

export default TestApp;
