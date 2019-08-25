import React from 'react';
import Jobs from './Jobs.js';
import Dashboard from './Dashboard.js';
import Radio from './Radio.js';
import AppWrapHeader from './AppWrapRoute.js';
import {Route,Switch} from 'react-router-dom';

const Routelist =()=>(
	<AppWrapHeader>
	<Switch>
		<Route path="/jobs" component={Jobs}/>
		<Route path="/radio" component={Radio}/>
		<Route path="/" exact  component={Dashboard}/>
        <Route component={()=> <p>404 error found</p>} />
	</Switch>
	</AppWrapHeader>
	
)
export default Routelist;