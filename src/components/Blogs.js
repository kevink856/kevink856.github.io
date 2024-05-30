// Import Dependencies
import '../styles/Blogs.css';

import ReactMarkdown from 'react-markdown';

import BlogNavbar from './BlogNavbar.js';
import { useState, useEffect } from 'react';

import pathtracer_milestone from '../data/Blogs/pathtracer_milestone.md';
import pathtracer_done from '../data/Blogs/pathtracer_done.md';

const blogs = [pathtracer_milestone, pathtracer_done];

function Blog(props) {
    var [markdown, setMarkdown] = useState({ md: "" });

    useEffect(() => {
        fetch(blogs[props.index])
            .then(res => res.text())
            .then(md => {
                console.log(md);
                setMarkdown({ md });
            });
    }, [props.index]);

    return (
      <div className="homeContainer">
        <BlogNavbar />
        <div id='homeContent'>
          <div id='container-override'>
              <div class='content'>
                  <div className='content-override'>
                      <div className='blogs'>
                        <ReactMarkdown children={markdown.md} className='markdown' components={{img:({node,...props})=><img alt="" style={{maxWidth:'100%'}}{...props}/>,
                            blockquote:({node,...props})=><p style={{color:'rgb(182, 182, 182)'}}{...props}/>,
                            hr:({node,...props})=><hr style={{margin:'50px'}}{...props}/>}} />
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </div>
    );
}

export default Blog;