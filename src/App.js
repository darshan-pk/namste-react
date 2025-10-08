import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/header"
import Body from "./components/body"
import Search from "./components/search";

//    let parent = React.createElement("div", {id : "parent"},
//     [ React.createElement("div", {id : "child"},
//     [React.createElement("h1",{},"iam from parent h1"),
//         React.createElement("h2",{},"i am from h2 tag")
//     ]
//    ),
//    React.createElement("div", {id : "child2"},
//     [React.createElement("h1",{},"iam from parent h1"),
//         React.createElement("h2",{},"i am from h2 tag")
//     ]
//    )
// ]
//    )
// let jsxHeading = <h1> Hi from darshan</h1>
// console.log({jsxHeading,parent});










const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
