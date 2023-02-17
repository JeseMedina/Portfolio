import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Hero() {
	return (
		<div className="Hero" id="hero">
			<h1 className="Hero-h1">Jesé Medina</h1>
			<h2 className="Hero-h2">Web Developer</h2>
			<div className="Hero-socials">
				<a
					href="https://github.com/JeseMedina"
					aria-label="Github"
					target="_blank"
					rel="noopener noreferrer"
					className="Hero-a"
				>
					<FontAwesomeIcon icon={faGithub} className="Hero-svg" />
				</a>
				<a
					href="https://www.linkedin.com"
					aria-label="Linkedin"
					target="_blank"
					rel="noopener noreferrer"
					className="Hero-a"
				>
					<FontAwesomeIcon icon={faLinkedin} className="Hero-svg" />
				</a>
			</div>
		</div>
	);
}

export default Hero;
