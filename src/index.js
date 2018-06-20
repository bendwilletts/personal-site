import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import './styles.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
