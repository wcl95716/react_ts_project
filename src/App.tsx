import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExampleGrpc from './apps/example';
import Layout from './components/layout';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Default } from './apps/fluentuiExample';



function App() {
  return (
    <Provider store={store} >
      <FluentProvider theme={webLightTheme}>
      <Router>
        <Layout>
            <Routes>
              <Route path="/" element={<ExampleGrpc />} />
              <Route path="/test1" element={<ExampleGrpc />} />
              <Route path="/test2" element={<Default />} />
            </Routes>
          </Layout>
      </Router>
      </FluentProvider>
    </Provider>
  );
}

export default App;
