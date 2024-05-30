import '../styles/Navbar.css';

import { Link } from 'react-router-dom';

function BlogNavbar() {
	return(
		<header id='nav' className="navbar">
			<Link to="/" className='navbar-link'>
				Home
			</Link>
			<Link to="/blogs" className='navbar-link'>
				Blogs
			</Link>
		</header>
	);
}

export default BlogNavbar;