import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import {Login} from '../Pages/Login';
import {Register} from '../Pages/Register';
import {Dashboard} from '../Pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register}/>
    <Route path="/dashboard" component={Dashboard} isPrivate/>
  </Switch>
);  

export default Routes;
