import '../styles/Navbar.css';

import { HashLink } from 'react-router-hash-link';

function Navbar() {
	return(
		<header id='nav' className="navbar">
			<HashLink to="/#home" className='navbar-link'>
				Home
			</HashLink>
			<HashLink to="/#about" className='navbar-link'>
				About
			</HashLink>
			<HashLink to="/#experience" className='navbar-link'>
				Experience
			</HashLink>
			<HashLink to="/#projects" className='navbar-link'>
				Projects
			</HashLink>
		</header>
	);
}

export default Navbar;