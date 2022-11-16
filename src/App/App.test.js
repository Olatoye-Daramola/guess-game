import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("App test", () => {
  test("App will render without any error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
