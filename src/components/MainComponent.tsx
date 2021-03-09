import React, { Component } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { IDish } from "../interfaces/IDish";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import MenuComponent from "./MenuComponent";
import DishDetailComponent from "./DishDetailComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import ContactComponent from "./ContactComponent";
import { IComment } from "../interfaces/IComment";
import { ILeader } from "../interfaces/ILeader";
import { IPromotion } from "../interfaces/IPromotion";

type MainProps = {
  dishId: string;
};

type MainState = {
  dishes: IDish[];
  comments: IComment[];
  leaders: ILeader[];
  promotions: IPromotion[];
  selectedDishId: number;
};
class MainComponent extends Component<{}, MainState> {
  state: MainState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
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
    const dishWithId = ({ match }: RouteComponentProps<MainProps>) => {
      return (
        <DishDetailComponent
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === Number(match.params.dishId)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === +match.params.dishId
          )}
        />
      );
    };

    return (
      <div>
        <HeaderComponent />

        <Switch>
          <Route
            path="/home"
            render={() => (
              <HomeComponent
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter((promo) => promo.featured)[0]
                }
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
              />
            )}
          />
          <Route
            exact
            path="/menu"
            render={() => <MenuComponent dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={dishWithId} />
          <Route path="/contact-us" component={ContactComponent} />
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
