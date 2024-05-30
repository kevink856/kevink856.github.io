// Import Dependencies
import '../styles/BlogHome.css';

import BlogNavbar from './BlogNavbar.js';
import BlogThumbs from '../data/blogthumb.js';

import { Link } from 'react-router-dom';

function BlogHome() {
  return (
    <div className="homeContainer">
      <BlogNavbar />
      <div id='homeContent'>
        <div id='container-override'>
            <div class='content'>
                <div className='content-override'>
                    <div className='blogs'>
                        { BlogThumbs.map(blog => {
                            return(
                                <Link to={blog.url} className='blog'>
                                    <p className='experience-content'>
                                        <p className='experience-header'>
                                            <p className='blog-title'>
                                                {blog.title}
                                            </p>
                                            <p className='blog-desc'>
                                                {blog.desc}
                                            </p>
                                        </p>
                                    </p>
                                </Link>
                            );
                        }) }
                    </div>
                </div>
            </div>
        </div>
		</div>
    </div>
  );
}

export default BlogHome;