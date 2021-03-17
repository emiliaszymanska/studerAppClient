import React from "react";
import Header from "./shared/header/Header";
import Home from "./home/Home";
import Map from "./map/Map";
import Footer from "./shared/Footer";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/map" component={Map}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
