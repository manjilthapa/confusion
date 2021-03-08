import React, { Component } from "react";
import { IComment } from "../interfaces/IComment";

type CommentProps = {
  comment: IComment;
};
class DishCommentComponent extends Component<CommentProps> {
  formatDate = (date: string): string => {
    let formattedDate = new Date(date);
    const arr = `${formattedDate}`.split(" ");
    return `${arr[1]} ${arr[2]}, ${arr[3]}`;
  };

  render() {
    const { comment } = this.props;

    return (
      <>
        <li>{comment.comment}</li>
        {/* <li>{`-- ${comment.author}, ${this.formatDate(comment.date)}`}</li> */}
        <li>{`--${comment.author}, ${new Intl.DateTimeFormat("da-DK", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(Date.parse(comment.date)))}`}</li>
      </>
    );
  }
}

export default DishCommentComponent;
