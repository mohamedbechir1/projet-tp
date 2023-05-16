import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Home from "./components/Home";
import Livres from "./components/Livres";
import Contact from "./components/Contact";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/livres" component={Livres} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>,
    document.getElementById("root")
);