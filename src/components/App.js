import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1) Take a copy of existing state
    const fishes = { ...this.state.fishes };

    // 2) add new item to the copy.
    fishes[`fish${Date.now()}`] = fish;

    // 3) set the new object to state.
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    console.log("Loading sample fishes!!!");
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Texas Seafood Market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
