import React from "react";
import { IDish } from "../interfaces/IDish";
import { ILeader } from "../interfaces/ILeader";
import { IPromotion } from "../interfaces/IPromotion";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

type HomeProps = {
  dish: IDish;
  promotion: IPromotion;
  leader: ILeader;
};

const RenderCard: React.FC<{ item: IDish | IPromotion | ILeader }> = ({
  item,
}) => {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};
const HomeComponent: React.FC<HomeProps> = ({ dish, promotion, leader }) => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
