import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Submit from './components/Submit';
import './App.css';
function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route path='/' exact component={Submit} />
				<Route path='/view' component={Search} />
				<footer className='footer'>
					<a href='https://github.com/lennoxstark47'>
						by twisam
					</a>
				</footer>
			</div>
		</Router>
	);
}

export default App;
