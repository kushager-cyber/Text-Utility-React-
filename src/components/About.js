import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import react, { useState } from "react";

export default function About(props) {
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  // let myStyle;
  // if (props.mode == "dark") {
  //   myStyle = {
  //     color: " white",
  //     backgroundColor: "black",
  //   };
  // } else {
  //   myStyle = {
  //     color: " black",
  //     backgroundColor: "white",
  //   };
  // }

  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#042743",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 className="my-2">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              About
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>Text Utility</strong> This utility have various features
              such as to convert a text to lowercase ,uppercase number of words
              etc. This utility is made up of using react.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
