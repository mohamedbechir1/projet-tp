import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Livre from './components/Livre';
import Contact from './components/Contact';
function App() {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/livre/:id" component={BookDescription} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;
