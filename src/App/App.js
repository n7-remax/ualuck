import React from 'react';
import './App.scss';

import '../common/style/style.scss'
import Logo from './Logo/Logo';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="row">
          <Logo />
          <Main />
          <Footer />
      </div>
    </div>
  );
}

export default App;
