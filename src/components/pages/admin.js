import React from 'react';
import Sidebar from '../others/sidebar';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const adminRoutes = () => {
    return (
        <Switch>
            <Route path="/admin/dashboard" component={Dashboard}/>
        </Switch>
        );
}

export default () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar heading="Admin Dashboard">
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </Sidebar>
                    </div>
                    <div className="col-md-9">
                        {adminRoutes()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
