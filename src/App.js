import React, { Component } from 'react';
import { InjectGlobal } from './style';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div>
        <InjectGlobal></InjectGlobal>
        <Header></Header>
      </div>
    )
  }
}

export default App