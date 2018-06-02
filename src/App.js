import React from 'react';
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ExpPage from "./components/pages/ExpPage.js";

const App = () => (
	<div>
		<Route path="/" exact component={HomePage} />
		<Route path="/experience" exact component={ExpPage} />
	</div>
);

export default App;