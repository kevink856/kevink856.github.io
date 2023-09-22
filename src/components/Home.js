import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
	return(
		<div class='main'>
			<span>
				Hi,<br/>I'm&nbsp;
			</span>
			<TypeAnimation
				sequence={[
					// Same substring at the start will only be typed out once, initially
					'Kevin.',
					2000, // wait 1s before replacing "Mice" with "Hamsters"
					'Kyoomin.',
					4000
				]}
				wrapper="span"
				speed={30}
				repeat={Infinity}
			/>
			<div>
				<IconContext.Provider value={{ className: "socialIcons" }}>
					<Link to='https://github.com/kevink856'>
						<FaGithub size='1em' />
					</Link>
					<Link to='https://www.linkedin.com/in/kevink856'>
						<FaLinkedin size='1em' />
					</Link>
					<Link to='mailto:kevink856@gmail.com'>
						<FaEnvelope />
					</Link>
				</IconContext.Provider>
			</div>
		</div>
	);
}

export default Home;