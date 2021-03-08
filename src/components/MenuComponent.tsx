import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { IDish } from "../interfaces/IDish";

type AppProps = {
  dishes: IDish[];
  onClick(id: number): void;
};

class MenuComponent extends Component<AppProps> {
  componentDidMount() {
    console.log("Menu component is mounted!");
  }
  componentDidUpdate() {
    console.log("Menu component is updated!");
  }
  render() {
    console.log("Menu component is rendered!");
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default MenuComponent;
