import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import DishCommentComponent from "./DishCommentComponent";
import { IDish } from "../interfaces/IDish";

type DishDetailProps = {
  dish: IDish;
};
const DishDetailComponent: React.FC<DishDetailProps> = (props) => {
  const { dish } = props;

  if (dish) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card key={dish.id}>
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
                  <ul className="list-unstyled" key={comment.id}>
                    <DishCommentComponent comment={comment} />
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
};

export default DishDetailComponent;
