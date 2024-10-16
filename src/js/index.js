//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

//import your own components
import Home from "./component/Home.jsx";


//render your react application
const root = ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);
