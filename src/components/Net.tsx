import React, { Component } from "react";
import axios from "axios";
export default class Net extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.getData()}></button>
      </div>
    );
  }

  getData() {
    axios
      .get("https://lalitbehera.github.io/station.json")
      .then(function(response) {
        // handle success
        console.log(response.data.stationList);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }
}
