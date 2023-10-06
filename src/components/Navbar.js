import '../styles/Navbar.css';

function Navbar() {
	return(
		<header id='nav' className="navbar">
			<a className='navbar-link' href="#home">
				Home
			</a>
			<a className='navbar-link' href="#about">
				About
			</a>
			<a className='navbar-link' href="#experience">
				Experience
			</a>
			<a className='navbar-link' href="#projects">
				Projects
			</a>
		</header>
	);
}

export default Navbar;