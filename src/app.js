import React from "react";
import DOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import NotFound from './components/pages/404';
import Home from './components/pages/home';
import Admin from "./components/pages/admin";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/admin" component={Admin} />
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

DOM.render(<App />, document.getElementById('root'))