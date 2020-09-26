import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Posts from "../Posts/Posts";
import PostigTv from "../PostigTv";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./PostTop.css";

function PostTop() {
  return (
    <Router>
      <Container>
        <Row
          className="justify-content-center text-center mt-3 "
          id="PostTopRow"
        >
          <Col sm={2} xs={2} className="p-0">
            <Link to="/">貼文</Link>
          </Col>
          <Col sm={2} xs={2} className="p-0">
            <Link to="/igTv">IGTV</Link>
          </Col>
          {/* 標注的功能因為要登入才能使用，因此這部分我沒有做 */}
          <Col sm={2} xs={2} className="p-0">
            <Link to="relatedPosts">已標註</Link>
          </Col>
        </Row>
      </Container>

      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/igTv">
          <PostigTv />
        </Route>

        <Route path="./realtedPosts"></Route>
      </Switch>
    </Router>
  );
}

export default PostTop;
