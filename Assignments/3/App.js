import React from "react";
import ReactDOM from "react-dom/client";

//1.Create a Nested header element using React.createElement(h1,h2,h3 inside a dive with class "title")

const h1 = React.createElement(
  "h1",
  {
    className: "h1",
  },
  "h1 tag"
);
const h2 = React.createElement(
  "h2",
  {
    className: "h2",
  },
  "h2 tag"
);
const h3 = React.createElement(
  "h3",
  {
    className: "h3",
  },
  "h3 tag"
);

const title = React.createElement(
  "div",
  {
    className: "title",
  },
  [h1, h2, h3]
);

// 2. create same Elememt using JSX

const titleJsx = (
  <div className="title">
    <h1 className="h1"> H1 tag</h1>
    <h2 className="h2"> H2 tag</h2>
    <h3 className="h3"> H3 tag</h3>
  </div>
);

//3. create functional component of same with JSX

const TitleComponent = () => {
  return <h1>Function component</h1>;
};

//4. pass the attributes in tag
const Title = () => {
  return (
    <div className="title">
      <h1 className="heading">
        using functional component and passin className attribute
      </h1>
      <h1 className="h1"> H1 tag</h1>
      <h2 className="h2"> H2 tag</h2>
      <h3 className="h3"> H3 tag</h3>
    </div>
  );
};

//5. Composition of component (Add a component inside another)

const container = (
  <div className="container">
    {title}
    {titleJsx}
    <TitleComponent />
    <Title />
  </div>
);

/* 6. create a header Component from scratch using Functional cpmponents with JSX
- Add logo on left 
-add search bar in middle
-add user iconon right
-add cssto make it look nice 
*/

const Appheader = () => {
  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="react-logo"
        className="logo"
      />

      <input type="text" placeholder="Search.." className="bar" />
      <button className="button">Search</button>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt=""
        className="user"
      />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appheader />);
