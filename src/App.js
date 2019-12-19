import React from 'react';
import './App.css';
import { connect } from 'react-redux';
class App extends React.Component {


  render() {
    return (
      <div className="App" style={{ flex: 1 }}>
        <div>Age:<span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}
const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: 'AGE_UP' }),
    onAgeDown: () => dispach({ type: 'AGE_DOWN' })
  }
}
export default connect(mapStateToProps, mapDispachToProps)(App);
