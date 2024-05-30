import '../styles/Navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
	return(
		<header id='nav' className="navbar">
			<Link to="/#home" className='navbar-link'>
				Home
			</Link>
			<Link to="/#about" className='navbar-link'>
				About
			</Link>
			<Link to="/#experience" className='navbar-link'>
				Experience
			</Link>
			<Link to="/#projects" className='navbar-link'>
				Projects
			</Link>
		</header>
	);
}

export default Navbar;