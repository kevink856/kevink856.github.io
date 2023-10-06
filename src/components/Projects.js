import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import ProjectList from '../data/projects.js';
import { FaGithub, FaGlobe } from 'react-icons/fa';

function Projects() {
	return(
		<div id='container'>
			<p className='header'>
				&lt;Projects&gt;
			</p>
            <p className='header-subtext'>
                ... more projects on GitHub
            </p>
			<div className='content'>
				<span id='text'>
                    { ProjectList.map(project => {
                        return(
                            <p className='project'>
                                <p className='project-header'>
                                    {project.title}
                                </p>
                                <p className='project-stack'>
                                    {project.stack}
                                </p>
                                <p className='project-desc'>
                                    {project.desc}
                                </p>
                                <p className='project-links'>
                                    <span>
                                        { project.github ?
                                            <Link to={project.github} className='project-link'>
                                                <FaGithub style={{ marginRight: '5px' }} />
                                                Github
                                            </Link>
                                            :
                                            null
                                        }
                                    </span>
                                    <span>
                                        { project.website ? 
                                            <Link to={project.website} className='project-link'>
                                                <FaGlobe style={{ marginRight: '5px' }} />
                                                Website
                                            </Link>
                                            :
                                            null
                                        }
                                    </span>
                                </p>
					        </p>
                        );
                    }) }
				</span>
			</div>
		</div>
	);
}

export default Projects;