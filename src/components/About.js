import '../styles/About.css';
import Portrait from '../images/portrait.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function About() {
    const [dropped, setDropped] = useState(false);

    function dropdown() {
        if(!dropped) {
            document.getElementById('dropdown-content').style.display = 'block';
            setDropped(true);
        } else {
            document.getElementById('dropdown-content').style.display = 'none';
            setDropped(false);
        }
        
    }

	return(
		<div id='container'>
			<p className='header'>
				&lt;About&gt;
			</p>
			<div className='content'>
				<span id='text'>
					<p>
						I'm a junior undergraduate student at UC San Diego studying
						Computer Science, looking for internship experience before I
                        graduate on June 2025.
					</p>
					<p>
						Currently, I'm learning skills and technologies for AI/ML and
						game development.
					</p>
					<p>
						Downloads: <Link className='download' to='Kevin_Kim_Resume.pdf' target='_blank' download>Resume</Link>,
						<Link className='download' to='academichistoryreviewpdf.pdf' target='_blank' download='Kevin_Kim_Transcript.pdf'> Transcript</Link>
					</p>
                    <p>
                        <button onClick={dropdown} className='dropdown-button'>
                            <FaBars style={{ marginTop: '1px' }} />
                            Coursework
                        </button>
                        <div id='dropdown-content'>
                            <p>
                                hello
                            </p>
                            <p>
                                hello
                            </p>
                        </div>
                    </p>
				</span>
				<span id='portrait-container'>
					<img id='portrait' src={Portrait} alt='portrait'></img>
				</span>
			</div>
		</div>
	);
}

export default About;