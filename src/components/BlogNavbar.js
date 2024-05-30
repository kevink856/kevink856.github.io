import '../styles/Navbar.css';

function BlogNavbar() {
	return(
		<header id='nav' className="navbar">
			<a className='navbar-link' href="/">
				Home
			</a>
			<a className='navbar-link' href="/blogs">
				Blogs
			</a>
		</header>
	);
}

export default BlogNavbar;