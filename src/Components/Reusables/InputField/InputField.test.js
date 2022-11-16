import React from "react";
import ReactDOM from "react-dom";
import InputField from "./InputField";

describe("InputField test", () => {
  test("that InputField will render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InputField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
