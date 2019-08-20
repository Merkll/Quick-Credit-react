import React from "react";
import DOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import NotFound from './components/pages/404';
import Home from './components/pages/home';
import Admin from "./components/pages/admin";
import store from './store';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/admin" component={Admin} />
                            <Route exact path="/" component={Home} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

DOM.render(<App />, document.getElementById('root'))
