import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import DishCommentComponent from "./DishCommentComponent";
import { IDish } from "../interfaces/IDish";
import { IComment } from "../interfaces/IComment";

type DishDetailProps = {
  dish: IDish;
  comments?: IComment[];
};
const DishDetailComponent: React.FC<DishDetailProps> = ({ dish, comments }) => {
  if (dish) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
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

            {comments?.map((comment) => {
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
