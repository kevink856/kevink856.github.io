import '../styles/About.css';
import Portrait from '../images/portrait.png';
import { Link } from 'react-router-dom';

function About() {
	return(
		<div id='container'>
			<p className='header'>
				&lt;About&gt;
			</p>
			<div className='content'>
				<span id='text'>
					<p>
						I'm a junior undergraduate student at UC San Diego studying
						Computer Science, looking for internship experience.
					</p>
					<p>
						Currently, I'm learning skills and technologies for AI/ML and
						game development.
					</p>
					<p>
						Downloads: <Link className='download' to='Kevin_Kim_Resume.pdf' target='_blank' download>Resume</Link>,
						<Link className='download' to='academichistoryreviewpdf.pdf' target='_blank' download='Kevin_Kim_Transcript.pdf'> Transcript</Link>
					</p>
				</span>
				<span id='buttons'>
					<img id='portrait' src={Portrait} alt='portrait'></img>
				</span>
			</div>
		</div>
	);
}

export default About;