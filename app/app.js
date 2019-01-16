import React from 'react'
// import { Link, Route } from 'react-router-dom'; // used to add links to routes and routes themselves
import { connect } from 'react-redux';
import * as _actions from './src/actions/index';

class App extends React.Component {
  render() {
    // *TESTING-ONLY: this snippet of code is just for testing to see if things work 
    const { testState } = this.props;

    return (
      <div onClick={() => this.props.test()}>
        Hello World!
        {/* *TESTING-ONLY: this snippet of code is just for testing to see if things work  */}
        <h1>{testState}</h1>
      </div>
    )
  }
}
 const mapstateToProps = state => {
   const { base } = state;
  // *TESTING-ONLY: this snippet of code is just for testing to see if things work 
   return {
     testState: base.testState
   }
 }

const mapDispatchToProps = dispatch => {
  // *TESTING-ONLY: this snippet of code is just for testing to see if things work 
  return ({
    test: () => dispatch(_actions.testAction())
  })
}

export default connect(mapstateToProps, mapDispatchToProps)(App);

