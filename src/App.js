import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row" style={{height: 75, background: '#302464'}}>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-1" style={{background: '#302464'}}>
            <div className="row mySeparator no-gutters">
            </div>
            <div className="row no-gutters mySeparator2">
            </div>
          </div>
          <div className="col-sm-4"><img className="mySelector" src="myimg.png"/></div>
          <div className="col-sm-7" style={{background: '#302464'}}>
            <div className="row mySeparator no-gutters">
            </div>
            <div className="row no-gutters mySeparator2">
            </div>
          </div>
        </div>
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
