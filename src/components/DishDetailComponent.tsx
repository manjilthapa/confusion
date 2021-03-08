import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import DishCommentComponent from "./DishCommentComponent";
import { IDish } from "../interfaces/IDish";

type DishDetailProps = {
  dish: IDish;
};
class DishDetailComponent extends Component<DishDetailProps> {
  render() {
    const { dish } = this.props;

    if (dish) {
      return (
        <div className="container">
          <div className="row" key={dish.id}>
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>

              {dish.comments &&
                dish.comments.map((comment) => {
                  return (
                    <ul className="list-unstyled">
                      <DishCommentComponent comment={comment} />{" "}
                    </ul>
                  );
                })}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DishDetailComponent;
