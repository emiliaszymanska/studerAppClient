import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./shared/header/Header";
import Home from "./home/Home";
import Map from "./map/Map";
import BuddyFinder from "./buddy-finder/BuddyFinder";
import Footer from "./shared/Footer";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/map" component={Map}/>
                <Route path="/buddy" component={BuddyFinder}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
