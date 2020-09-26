import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./PostigTv.css";

function PostigTv() {
  const style = {
    width: "100%",
    maxHeight: "300px",
  };
  return (
    <Container>
      <Row className="mt-3 mb-5">
        <Col>
          <Image
            id="igTvImg"
            style={style}
            alt="igTv"
            src="https://instagram.ftpe7-4.fna.fbcdn.net/v/t51.2885-15/e15/40976489_2202604729984003_2941711351454234908_n.jpg?_nc_ht=instagram.ftpe7-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=WlpTdKCpIpkAX9OxStW&_nc_tp=18&oh=c9070903a123bb9fb1af8485f8e66551&oe=5F6D8023"
          />
        </Col>
        <Col>
          <Image
            style={style}
            alt="igTv"
            src="https://instagram.ftpe7-4.fna.fbcdn.net/v/t51.2885-15/e15/40976489_2202604729984003_2941711351454234908_n.jpg?_nc_ht=instagram.ftpe7-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=WlpTdKCpIpkAX9OxStW&_nc_tp=18&oh=c9070903a123bb9fb1af8485f8e66551&oe=5F6D8023"
          />
        </Col>
        <Col>
          <Image
            style={style}
            alt="igTv"
            src="https://instagram.ftpe7-4.fna.fbcdn.net/v/t51.2885-15/e15/40976489_2202604729984003_2941711351454234908_n.jpg?_nc_ht=instagram.ftpe7-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=WlpTdKCpIpkAX9OxStW&_nc_tp=18&oh=c9070903a123bb9fb1af8485f8e66551&oe=5F6D8023"
          />
        </Col>
      </Row>
      <Row className="mt-5 mb-1" id="igTvFooter">
        <a className="m-1">新聞稿</a>
        <a className="m-1">關於</a>
        <a className="m-1"> 使用說明</a>
      </Row>
    </Container>
  );
}
export default PostigTv;
