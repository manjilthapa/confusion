import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

export type Dish = {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
};

type AppState = {
  dishes: Dish[];
};
class App extends Component<{}, AppState> {
  state: AppState = {
    dishes: DISHES,
  };
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
