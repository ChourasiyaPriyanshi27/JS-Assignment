import React from "react";
import { Card } from "react-bootstrap";

class CommonCard extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "380px",
              height: "300px",
              boxShadow: "1px 2px 9px #F4AAB9",
            }}
          >
            <h2>Author:</h2>
          </div>
        </div>
        <div style={{ marginTop: "18px" }}></div>
      </>
    );
  }
}
export default CommonCard;
