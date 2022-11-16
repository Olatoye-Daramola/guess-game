import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

describe("Button test", () => {
  test("that Button will render without crashin", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
