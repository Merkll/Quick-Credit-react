import React from "react";
import DOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NotFound from './components/404';
import Home from './components/home';
import { LoginForm, SignupForm } from './components/forms';

const AppRoutes = () => {
    return <Router>
            <Switch>
                <Route exact path="/" component={Home} >
                    <Route path="login" component={LoginForm} />
                    <Route path="signup" component={SignupForm} />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </Router>
}

class App extends React.Component {
    render() {
        return (
            <Home />
            // <Router>
            //     <div>
            //         <Switch>
            //             <Route exact path="/home" component={Home} />
            //             <Route exact path="/" component={Home} />
            //             <Route component={NotFound} />
            //         </Switch>
            //     </div>
            // </Router>
        )
    }
}


DOM.render(<App />, document.getElementById('root'))