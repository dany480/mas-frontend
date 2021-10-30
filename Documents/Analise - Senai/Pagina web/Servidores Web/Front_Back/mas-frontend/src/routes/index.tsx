import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Login } from '../Pages/Login';
import {Dashboard} from '../Pages/Dashboard';
import {Register} from '../Pages/Register';
import { NotFound } from '../Pages/NotFound';

const Routes: React.FC = () =>(
    <Switch>
        <Route path= '/' exact component={Login} />
        <Route path= '/dashboard' exact component={Dashboard} />
        <Route path= '/register' exact component={Register} />

        <Route path='/*' component={NotFound} />
    </Switch>
)

export default Routes;