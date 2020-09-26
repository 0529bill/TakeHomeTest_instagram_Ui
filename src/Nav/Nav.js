import React from "react";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Nav.css";

function Nav() {
  return (
    <div className="pb-2 border-bottom">
      <Container fluid className="mt-3">
        <Row>
          <Col className="ml-3 ml-xl-5 text-left">
            <img
              alt="Instagram"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            />
          </Col>
          {/* <Col xs={3} className='text-center'>
                <input className='text-center' type="text" id="fname" name="fname" placeholder='搜尋'/>
            </Col> */}
          <Col xs={6} className="text-right">
            <Button id="nav_button" size="sm">
              登入
            </Button>
            <Button variant="link" size="sm">
              註冊
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav;
