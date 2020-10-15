import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "pages/Dashboard";
import NotFound from "pages/NotFound";
import App from 'App';
import Popup from 'features/custom/Popup'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/test" component={Popup} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;