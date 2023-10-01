import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';
import ExampleGrpc from './apps/example';

function App() {
  return (
    <Provider store={store}>
          <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ExampleGrpc /> 
      </header>
    </div>
    </Provider>

  );
}

export default App;
