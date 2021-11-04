import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Submit from './components/Submit';
import CxList from './components/CxList';
import succesfull from './components/succesfull';
import unsuccessfull from './components/unsuccessfull';
import Editcx from './components/Editcx';
import './App.css';
function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route path='/' exact component={Submit} />
				<Route path='/view' component={Search} />
				<Route path='/cxlist' component={CxList} />
				<Route
					path='/success'
					component={succesfull}
				/>
				<Route
					path='/fail'
					component={unsuccessfull}
				/>
				<Route path='/edit/:id' component={Editcx} />
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
