function app() {
    return React.createElement("h2",{class:"main"},"this is mazhar sir")
}


let contenair=document.querySelector("#root")

let root=ReactDOM.createRoot(contenair);
root.render(React.createElement(app))