// how we make an element - variable name = React.createElement("tagname", {props}, "content")

const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "title-class",
  },
  "heading"
);
// This is the how we create an element in React
// We give Tag Name, Props, Content inside the Tag

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

// const root = ReactDOM.createRoot(document.getElementById("container"));
const root = ReactDOM.createRoot(document.getElementById("container"));
// This is how we create a root in React

// console.log(heading)

// root.render(heading);
root.render(container);
// This is for Rendering
