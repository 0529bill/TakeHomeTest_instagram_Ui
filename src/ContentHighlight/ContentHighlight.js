import React from "react";
import { Image, Col, Row } from "react-bootstrap";

import "./ContentHighlight.css";

function contentHighlights() {
  return (
    <Row className="m-md-5 mt-3 ml-3">
      <Col className="text-center" xs={3}>
        <Image
          className=" p-1 border"
          roundedCircle
          id="content_pic1"
          src="https://instagram.ftpe7-4.fna.fbcdn.net/v/t51.12442-15/e35/c0.322.828.828a/s150x150/92068138_207185924061019_2552005415472515921_n.jpg?_nc_ht=instagram.ftpe7-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=srHSatVpSnMAX_khgY0&_nc_tp=16&oh=5660a084cd6b566b4cd27028b290c6f9&oe=5F6B9A83"
          alt="content_highlights"
        />
        <div className="mt-2">📍點位</div>
      </Col>
      <Col className="text-center" xs={3}>
        <Image
          className="p-1 border"
          roundedCircle
          id="content_pic2"
          alt="content_highlights"
          src="https://instagram.ftpe7-4.fna.fbcdn.net/v/t51.12442-15/e15/c0.280.720.720a/s150x150/90673560_1079028495793613_1085078937057180271_n.jpg?_nc_ht=instagram.ftpe7-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=MByh5lQA8C4AX9sFEz4&_nc_tp=16&oh=b613ff100d2deb7cd2f1a229f2902ac1&oe=5F6BC9D5"
        />
        <div className="mt-2">名人合作</div>
      </Col>
      <Col className="text-center" xs={3}>
        <Image
          className="p-1 border"
          roundedCircle
          id="content_pic3"
          alt="content_highlights"
          src="https://instagram.ftpe7-4.fna.fbcdn.net/v/t51.12442-15/e35/c0.292.750.750a/s150x150/39997175_730359200632721_2592079003323744605_n.jpg?_nc_ht=instagram.ftpe7-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=0id0vXNxj3QAX96lR1l&_nc_tp=16&oh=f8bb00b329c375c25399672451a904bf&oe=5F6BC6BE"
        />
        <div className="mt-2">粉絲分享❤️</div>
      </Col>
      <Col className="text-center" xs={3}>
        <Image
          className=" p-1 border"
          id="content_pic4"
          roundedCircle
          alt="content_highlights"
          src="https://instagram.ftpe7-3.fna.fbcdn.net/v/t51.12442-15/e15/c0.280.720.720a/s150x150/79600061_3065476693485542_5429024343235821190_n.jpg?_nc_ht=instagram.ftpe7-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=a1u_fvDcL1UAX8Y6vG5&_nc_tp=16&oh=6f58eefd3e34f95d7e2c7a2f99ceef33&oe=5F6C14A1"
        />
        <div className="mt-2">合作插畫家</div>
      </Col>
    </Row>
  );
}

export default contentHighlights;
