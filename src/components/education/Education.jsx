import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import education from '../../../public/education';

function Education() {
	return (
		<div className="Education" id="education">
			<h2 className="Education-h2">Educación</h2>
			<div className="Education-section">
				{education.map(item => (
					<Link to={`education/${item.id}`} className="Card" key={item.id}>
						<FontAwesomeIcon className="Card-svg" icon={faCertificate} />
						<p className="Card-p">{item.year}</p>
						<h3 className="Card-h3">{item.name}</h3>
						<p className="Card-p">{item.place}</p>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Education;
