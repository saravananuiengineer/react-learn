import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo"

// const parent = React.createElement("div", {id:"parent"}, [
//     React.createElement("div", {id:"child1", key:"child1"},[
//         React.createElement("h1",{key:"h1-1"},"Heading 1"),
//         React.createElement("h1",{key:"h1-2"},"Heading 2"),
//     ]),
//     React.createElement("div", {id:"child2", key:"child2"},[
//         React.createElement("h1",{key:"h1-3"},"Heading 1"),
//         React.createElement("h1",{key:"h1-4"},"Heading 2"),
//     ])
// ]);
 
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const Header = () => {
    return (
        <div className="header">
            <div>logo</div>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                
            </nav>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app-layout">
            <Header />
            
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
