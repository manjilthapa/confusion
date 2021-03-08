import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { IDish } from "../interfaces/IDish";
import { DISHES } from "../shared/dishes";
import MenuComponent from "./MenuComponent";
import DishDetailComponent from "./DishDetailComponent";

type MainState = {
  dishes: IDish[];
  selectedDishId: number;
};
class MainComponent extends Component<{}, MainState> {
  state: MainState = {
    dishes: DISHES,
    selectedDishId: -1,
  };

  componentDidMount() {
    console.log("Main component is mounted!");
  }
  componentDidUpdate() {
    console.log("Main component is updated!");
  }

  onDishSelect = (dishId: number) => {
    this.setState({ selectedDishId: dishId });
  };
  render() {
    console.log("Main component is rendered!");
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent
          dishes={this.state.dishes}
          onClick={(dishId: number) => this.onDishSelect(dishId)}
        />
        {
          <DishDetailComponent
            dish={
              this.state.dishes.filter(
                (d) => d.id === this.state.selectedDishId
              )[0]
            }
          />
        }
      </div>
    );
  }
}

export default MainComponent;
