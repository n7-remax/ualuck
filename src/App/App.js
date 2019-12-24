import React from 'react';
import { Route } from 'react-router-dom'

import './App.scss';

import '../common/style/style.scss'
import Logo from './Logo/Logo';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="row">
      <Route exact path="/ualuck">
          <Logo />
          <Main />
          <Footer />
      </Route>
      </div>
    </div>
  );
}

export default App;
