import React from 'react';
import Sidebar from '../others/sidebar';
import Dashboard from './dashboard';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { routes as routesConfig } from '../../config';
import ClientsPage from './clients/clients';
import LoansPage from './loans/loans';

const { admin: routes } = routesConfig;
const adminRoutes = () => {
    console.log(routes.dashboard, routes.clients)
    return (
        <Switch>
            <Route path={routes.dashboard} component={Dashboard}/>
            <Route path={routes.clients} component={ClientsPage}/>
            <Route path={routes.loans} component={LoansPage}/>
            <Route path='/' component={Dashboard}/>
            <Redirect to="/404" />
        </Switch>
        );
}

export default () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar heading="Admin">
                            <li>
                                <NavLink to={routes.dashboard} activeClassName="currentLink">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.clients} activeClassName="currentLink">Clients</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.loans} activeClassName="currentLink">Loans</NavLink>
                            </li>
                        </Sidebar>
                    </div>
                    <div className="col-md-9 content">
                        {adminRoutes()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
