import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {
  // state
  // lifecycle events
  // UI

  render() {
    return (
      <div>
        Hello Kevin Steele II!
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, 
  document.getElementById('app')
);