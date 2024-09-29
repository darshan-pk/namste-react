
// React element at the it is just a object whenever we do React.createElement is will just create a object not html element
// ReactElement(Object) = HTML(browser understand)
// during rendering it will converts the object into html and puts into the dom


// let heading =  React.createElement('h1',{id : 'heading', xyz:'xyz'},'hello world form react!') 
// let root =  ReactDOM.createRoot(document.getElementById('root'))
// console.log(heading);

//creating children elements

let testHeading = React.createElement('div',{id:'parent'},
    [
        React.createElement('div1',{id:'children'},
            [React.createElement('h1',{},' this is the h1 tag'),
            React.createElement('h2',{},' this is the h2 tag')
            ]
            
           
          ),
          React.createElement('div2',{id:'children'},
            [React.createElement('h1',{},' this is the h1 tag'),
            React.createElement('h2',{},' this is the h2 tag')
            ]
            
           
          )
    ]
   
    
    )
console.log({testHeading});
let root =  ReactDOM.createRoot(document.getElementById('root'))
root.render(testHeading)