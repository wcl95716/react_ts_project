import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExampleGrpc from './apps/example';
import Layout from './components/layout';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
            <Routes>
              <Route path="/" element={<ExampleGrpc />} />
              <Route path="/test1" element={<ExampleGrpc />} />
              <Route path="/test2" element={<ExampleGrpc />} />
            </Routes>
          </Layout>
      </Router>
    </Provider>
  );
}

export default App;
