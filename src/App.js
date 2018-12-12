import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Router from './components/Router/Router';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.pageContainer}>
        <Layout>
          <Router />
        </Layout>
      </div>
    );
  }
}

export default App;
