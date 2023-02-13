import { Link } from 'react-router-dom';

const projects = [
	{
		id: 1,
		name: 'Project 1',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		name: 'Project 2',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 3,
		name: 'Project 3',
		image: 'https://via.placeholder.com/150',
	},

	{
		id: 4,
		name: 'Project 4',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 5,
		name: 'Project 5',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 6,
		name: 'Project 6',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 7,
		name: 'Project 7',
		image: 'https://via.placeholder.com/150',
	},

	{
		id: 8,
		name: 'Project 8',
		image: 'https://via.placeholder.com/150',
	},
];

function Projects() {
	return (
		<div className="Projects" id="projects">
			<h2 className="Projects-h2">Proyectos</h2>
			<div className="Projects-section">
				{projects.map(item => (
					<Link to={`projects/${item.id}`} className="Card" key={item.id}>
						<h3 className="Card-h3">{item.name}</h3>
						<img className="Card-img" src={item.image} alt={item.name} loading="lazy" />
					</Link>
				))}
			</div>
		</div>
	);
}

export default Projects;
