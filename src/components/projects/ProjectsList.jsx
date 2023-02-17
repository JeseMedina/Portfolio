import { Link } from 'react-router-dom';
import projects from '../../../public/Projects';

function ProjectsList({ projectIds = [] }) {
	const filteredProjects =
		projectIds.length > 0 ? projects.filter(item => projectIds.includes(item.id)) : projects;

	return filteredProjects.map(item => (
		<Link to={`/project/${item.id}`} className="Card" key={item.id}>
			<h3 className="Card-h3">{item.name}</h3>
			<img
				className="Card-img"
				src={`../../../public/images/${item.image}`}
				alt={item.name}
				loading="lazy"
			/>
		</Link>
	));
}

export default ProjectsList;
