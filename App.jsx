import React, { useEffect, useState } from 'react';
import BlocklyUI from '../components/BlocklyUI';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <div className="splash">
        <h1 className="logo">X</h1>
        <p className="subtitle">AI Powered X Trading Automatic Bots</p>
        <p className="init">Initializing...</p>
      </div>
    );
  }

  return <BlocklyUI />;
}