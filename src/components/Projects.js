import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import ProjectList from '../data/projects.js';
import { FaGithub, FaGlobe, FaCode } from 'react-icons/fa';

function Projects() {
	return(
		<div id='container'>
			<p className='header'>
				&lt;Projects&gt;
			</p>
			<div className='content'>
				<span id='text'>
                    { ProjectList.map(project => {
                        return(
                            <p className='project'>
                                <p className='project-sidebar'>
                                    <FaCode className='project-icon' />
                                    <div className='project-line'></div>
                                </p>
                                <p className='project-content'>
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
                                                <Link to={project.github} target="_blank" className='project-link'>
                                                    <FaGithub style={{ marginRight: '5px', marginTop: '2px' }} />
                                                    Github
                                                </Link>
                                                :
                                                null
                                            }
                                        </span>
                                        <span>
                                            { project.website ? 
                                                <Link to={project.website} target="_blank" className='project-link'>
                                                    <FaGlobe style={{ marginRight: '5px', marginTop: '2px' }} />
                                                    Website
                                                </Link>
                                                :
                                                null
                                            }
                                        </span>
                                    </p>
                                </p>
                            </p>
                        );
                    }) }
				</span>
			</div>
            <p className='subtext'>
                ... more projects on GitHub.
            </p>
		</div>
	);
}

export default Projects;