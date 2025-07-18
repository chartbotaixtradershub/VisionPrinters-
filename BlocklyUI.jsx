import React from 'react';

export default function BlocklyUI() {
  return (
    <div className="bot-ui">
      <header>
        <h2>Bot Builder</h2>
        <div className="auth-buttons">
          <button onClick={() => window.location.href='/login'}>Login</button>
          <button onClick={() => window.location.href='https://track.deriv.com/_BdWWYCtdLopZl7VyVw174GNd7ZgqdRLk/1/'}>Sign Up</button>
        </div>
      </header>

      <section className="prebuilt-bots">
        <h3>Prebuilt Bots</h3>
        <ul>
          <li><button disabled>Bot 1 (Coming Soon)</button></li>
          <li><button disabled>Bot 2 (Coming Soon)</button></li>
          <li><button disabled>Bot 3 (Coming Soon)</button></li>
          <li><button disabled>Bot 4 (Coming Soon)</button></li>
          <li><button disabled>Bot 5 (Coming Soon)</button></li>
        </ul>
      </section>

      <section className="blockly-area">
        <p>[ Blockly Interface Loads Here ]</p>
      </section>

      <footer>
        <p className="risk-warning">⚠️ Trading involves risk. Only trade with funds you can afford to lose.</p>
        <p className="telegram">Contact us on Telegram</p>
      </footer>
    </div>
  );
}