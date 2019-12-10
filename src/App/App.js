import React from 'react';
import './App.scss';

import '../common/style/style.scss'
import Logo from './Logo/Logo';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="logo-place">
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default App;
