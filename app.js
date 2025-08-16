   //let heading = React.createElement("h1",{id : "heading"},"hello from react app")
//    <div id="parent">
//     <div id="child">
//    <h1>
//     i am from parent 1
//    </h1>
//    <h2>
//     i am the h2 tag
//    </h2>

//     </div>
//    </div>

   let parent = React.createElement("div", {id : "parent"}, 
    [ React.createElement("div", {id : "child"}, 
    [React.createElement("h1",{},"iam from parent h1"),
        React.createElement("h2",{},"i am from h2 tag")
    ]
   ),
   React.createElement("div", {id : "child2"}, 
    [React.createElement("h1",{},"iam from parent h1"),
        React.createElement("h2",{},"i am from h2 tag")
    ]
   )
]
   )
    let root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)