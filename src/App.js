import React, { Component } from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
 
export default App;