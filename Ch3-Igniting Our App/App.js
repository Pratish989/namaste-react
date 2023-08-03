import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
    {
      id: "title",
      className: "title-class",
    },
    "heading"
  );

  
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
      className: "title-class",
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  
  const root = ReactDOM.createRoot(document.getElementById("container"));
 
  

  root.render(container);

  