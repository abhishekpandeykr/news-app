import { Router, Link } from '@reach/router';
import React from 'react';
import SourcesList from './components/Sources/SourcesList';
import Home from './components/Home/Home';

export default function App() {
	return (
		<div>
			<Router>
				<Home path='/' />
				<SourcesList path='sources' />
			</Router>
		</div>
	);
}
