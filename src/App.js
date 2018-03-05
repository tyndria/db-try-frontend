import React, {Component} from 'react';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<NavBar />
          		<div className="page-container">
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
