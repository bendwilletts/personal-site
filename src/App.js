import React from 'react';
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ExpPage from "./components/pages/ExpPage.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => (
	<div className = "ui container">
		<NavBar/>
		<Route path="/" exact component={HomePage} />
		<Route path="/portfolio" exact component={ExpPage} />
		<Footer/>
	</div>
);

export default App;