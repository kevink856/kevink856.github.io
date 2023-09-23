import '../styles/Navbar.css';

function Navbar() {
	return(
		<header id='nav' className="navbar">
			<a href="#home">
				Home
			</a>
			<a href="#about">
				About
			</a>
			<a href="#experience">
				Experience
			</a>
			<a href="#projects">
				Projects
			</a>
		</header>
	);
}

export default Navbar;