import React from 'react'
import { Link } from 'react-router'
import ProfilePic from '../assets/images/ashref.jpg'

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-expand-md navbar-light bg-light'>
			<div className='container-fluid d-flex justify-cont	ent-between'>
				<a className='navbar-brand' href='#'>
					<img
						src={ProfilePic}
						alt='Ashref'
						width='30'
						height='30'
						className='d-inline-block align-text-top rounded-circle'
					/>
					<b className='ps-2'>Ashref Raj</b>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse justify-content-end'
					id='navbarNavDropdown'
				>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page' href='#resume'>
								Resume
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/calculator'>
								Projects
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default NavBar
