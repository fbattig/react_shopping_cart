import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Router from './components/Router/Router';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Router />
        </Layout>
      </div>
    );
  }
}

export default App;
