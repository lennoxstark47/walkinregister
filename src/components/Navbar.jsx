import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-dark bg-dark navbar-expand sticky-top'>
				<div className='container-fluid'>
					<a
						className='navbar-brand'
						style={{ cursor: 'pointer' }}
						href='/'>
						Cx Walk-In
					</a>
					<div
						className='collapse navbar-collapse'
						id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a
									className='nav-link active'
									aria-current='page'
									href='/'>
									Create
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link active'
									href='/view'>
									Search
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link active'
									href='/getByDate'>
									Search By Date range
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link active'
									href='/cxlist'>
									View all customers
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
