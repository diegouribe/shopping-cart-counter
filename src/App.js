import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = counterId => {
    const counters = this.state.counters.map(c => {
      if (c.id === counterId) {
        c.value = c.value + 1;
      }
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDecrement = counterId => {
    const counters = this.state.counters.map(c => {
      if (c.id === counterId) {
        c.value = c.value - 1;
      }
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counterId)
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
