import React from "react";
import ScrollRestoration from "./environment/ScrollRestoration";
import Header from "./shared/header/Header";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import Map from "./map/Map";
import Footer from "./shared/Footer";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <ScrollRestoration/>
            <Header/>
            <Switch>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/map" component={Map}/>
                <Route path="/" exact component={Home}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;