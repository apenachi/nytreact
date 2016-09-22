import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './Components/Application';
import MainPage from './Pages/MainPage';
import SearchPage from './Pages/SearchPage';
import SavedPage from './Pages/SavedPage';

export default (
	<Route component={Application}>
		<Route path="/" component={MainPage}></Route>
		<Route path="search" component={SearchPage}></Route>
		<Route path="saved" component={SavedPage}></Route>
    <IndexRoute component={MainPage}/>    
	</Route>
);