import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { IDish } from "../interfaces/IDish";
import { DISHES } from "../shared/dishes";
import MenuComponent from "./MenuComponent";
import DishDetailComponent from "./DishDetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";

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
        <HeaderComponent />

        <Switch>
          <Route path="/home" render={() => <HomeComponent />} />
          <Route
            path="/menu"
            render={() => <MenuComponent dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        {/* <MenuComponent
          dishes={this.state.dishes}
          onClick={(dishId: number) => this.onDishSelect(dishId)}
        />

        <DishDetailComponent
          dish={
            this.state.dishes.filter(
              (d) => d.id === this.state.selectedDishId
            )[0]
          }
        /> */}

        <FooterComponent />
      </div>
    );
  }
}

export default MainComponent;
