import React, { Component } from "react";
interface Props {}
interface States {
  time: string;
}
export default class Timer extends Component<Props, States> {
  intervalID: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  render() {
    return (
      <div>
        <h1>Time : {this.state.time}</h1>
      </div>
    );
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}
