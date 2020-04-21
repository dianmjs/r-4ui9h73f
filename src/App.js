import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      letler: "",
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      letler: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input
          type="text"
          placeholder="Empieza a escribir algo"
          value={this.state.letler}
          onChange={this.updateInput}
        />
        <p className="repeater">{this.state.letler}</p>
      </div>
    );
  }
}

export default App;
