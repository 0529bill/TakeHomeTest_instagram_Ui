import React from "react";
import UserTitle from "../UserTitle/UserTitle";
import UserInfo from "../UserInfo/UserInfo";
import { Container, Image, Col, Row } from "react-bootstrap";

import "./Content.css";
import ContentHighlight from "../ContentHighlight/ContentHighlight";

function Content() {
  return (
    <Container fluid className="">
      <Row>
        <Col xs={3} className="m-sm-4 ml-sm-4 mt-3">
          <Image
            id="Content_Image"
            roundedCircle
            src="https://instagram.ftpe7-3.fna.fbcdn.net/v/t51.2885-19/s320x320/36159708_235623113825620_3667017535154290688_n.jpg?_nc_ht=instagram.ftpe7-3.fna.fbcdn.net&_nc_ohc=9QVy6CjB74EAX-yGJdS&oh=d2885404437b4f543ae730679094a65a&oe=5F93E41B"
            alt="content_pic"
          />
        </Col>
        <Col xs={7} className="mt-2 ml-2">
          <UserTitle />
          <span className="d-none d-sm-block">
            <UserInfo />
          </span>
        </Col>
        <Col className="d-block d-sm-none">
          <UserInfo />
        </Col>
      </Row>
      <Row className="border-bottom ">
        <ContentHighlight />
      </Row>
    </Container>
  );
}

export default Content;
