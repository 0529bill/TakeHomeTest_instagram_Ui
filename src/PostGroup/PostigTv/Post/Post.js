import React from "react";
import { Container, Row } from "react-bootstrap";
import PostRow from "../PostRow/PostRow";

function Post({ post }) {
  return (
    <Container fluid className="mt-sm-3 mt-xs-3">
      <Row className=" mt-3 justify-content-center">
        <PostRow post={post} />
      </Row>
    </Container>
  );
}

export default Post;
