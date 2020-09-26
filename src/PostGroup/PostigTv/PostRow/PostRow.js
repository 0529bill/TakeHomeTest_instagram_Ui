import React from "react";
import { Col } from "react-bootstrap";

const Post_row = ({ post }) => {
  const style = {
    width: "100%",
  };
  return (
    <>
      {post.map((prop, index) => (
        <Col key={index} xs={3} sm={3} className="m-2 p-0 ">
          <img style={style} alt="Posts" src={prop.url} />
        </Col>
      ))}
    </>
  );
};

export default Post_row;
