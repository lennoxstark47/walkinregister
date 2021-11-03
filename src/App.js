import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Submit from './components/Submit';
function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route path='/' exact component={Submit} />
				<Route path='/view' component={Search} />
			</div>
		</Router>
	);
}

export default App;
