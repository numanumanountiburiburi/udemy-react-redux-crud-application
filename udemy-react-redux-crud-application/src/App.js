import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <React.Fragment>
    <label htmlFor="bar">bar</label>
    <input type="text" onCange={() => {console.log("Iam clicked!")}}  />;
    </React.Fragment>
    )
  }
}
export default App;
