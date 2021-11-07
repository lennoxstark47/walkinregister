import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-dark bg-dark navbar-expand-sm sticky-top'>
				<div className='container-fluid'>
					<a
						className='navbar-brand'
						style={{ cursor: 'pointer' }}
						href='/'>
						Cx Walk-In
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-sm-0'>
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
							<li className='nav-item'>
								<a
									className='nav-link active'
									href='/converted'>
									See All Converted
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link active'
									href='/nonconverted'>
									See Non-Converted
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
