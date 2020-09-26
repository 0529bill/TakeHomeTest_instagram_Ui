import React from "react";
import Button from "react-bootstrap/Button";

import "./UserTitle.css";

function UserTitle() {
  return (
    <>
      <div className="">
        <span style={{ fontSize: 28 }}>memopresso</span>
        <Button
          className="ml-sm-3"
          id="User_title_trackingButton"
          size="sm"
          variant="primary"
        >
          追蹤
        </Button>
      </div>
      <div className="mt-3 d-none d-sm-block" id="User_title_trackingStats">
        <span className="mr-3">194貼文</span>
        <span className="mr-3">5154追蹤者</span>
        <span className="mr-3">225追蹤中</span>
      </div>
    </>
  );
}
export default UserTitle;
