import '../styles/Experience.css';
import ExperienceList from '../data/experience.js';

function Experience() {
	return(
		<div id='container'>
			<p className='header'>
				&lt;Experience&gt;
			</p>
			<div className='content'>
				<span id='text'>
                    { ExperienceList.map(experience => {
                        return(
                            <p className='experience'>
                                <p className='experience-content'>
                                    <p className='experience-header'>
                                        <p className='experience-heading-1'>
                                            {experience.company}
                                        </p>
                                        <p className='experience-heading-2'>
                                            {experience.title} - {experience.location}
                                        </p>
                                        <p className='experience-heading-3'>
                                            {experience.startDate} - {experience.endDate}
                                        </p>
                                    </p>
                                    <ul className='experience-desc'>
                                        { experience.points.map(point => {
                                            return(
                                                <li>
                                                    {point}
                                                </li>
                                            );
                                        }) }
                                    </ul>
                                </p>
                            </p>
                        );
                    }) }
				</span>
			</div>
		</div>
	);
}

export default Experience;