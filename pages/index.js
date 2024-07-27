// client/pages/index.js
import React from 'react';
import Chatbot from '../src/components/Chatbot';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', margin: '0', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div id="root" style={{ width: '100%', maxWidth: '600px', margin: '20px' }}>
        <Chatbot />
      </div>
    </div>
  );
};

export default HomePage;
