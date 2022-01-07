import { useState } from "react";
import React from "react";

export default function Textt(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const LhandleUpClick = () => {
    let newwText = text.toLowerCase();
    setText(newwText);
  };
  const handleOnChange = (event) => {
    console.log("change handled" + text);
    setText(event.target.value);
  };
  const ChandleUpClick = () => {
    const ntext = "";
    setText(ntext);
  };

  const [text, setText] = useState("Enter the Text Here");

  return (
    <>
      <div className="container my-4">
        <h2
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Enter Your Text
        </h2>
        <div className="mb-6">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#134663",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <div className="btn-toolbar">
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={handleUpClick}
            >
              Convert to uppercase
            </button>
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={LhandleUpClick}
            >
              Convert to lowercase
            </button>
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={ChandleUpClick}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h1
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          YOUR TEXT HAS
        </h1>
        <p
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
      </div>
      <div className="container my-5">
        <h2
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Preview
        </h2>
        <p
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {text}
        </p>
      </div>
    </>
  );
}
