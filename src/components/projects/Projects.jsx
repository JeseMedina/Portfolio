import { Link } from 'react-router-dom';

const projects = [
	{
		id: 1,
		name: 'Streaming Clone',
		image: 'https://via.placeholder.com/150',
		estado: 'terminado',
		tech: ['HTML', 'SCSS', 'Js', 'React'],
	},
	{
		id: 2,
		name: 'BLog React & DRF',
		image: 'https://via.placeholder.com/150',
		estado: 'falta terminar',
		tech: ['HTML', 'TailwindCSS', 'Js', 'React', 'Python', 'Django Rest Framework'],
	},
	{
		id: 3,
		name: 'Api Flask',
		image: 'https://via.placeholder.com/150',
		estado: 'revisar',
		tech: ['Python', 'Flask', 'Mysql'],
	},

	{
		id: 4,
		name: 'HodFoot',
		image: 'https://via.placeholder.com/150',
		estado: 'falta terminar',
		tech: ['HTML', 'CSS', 'JS', 'jQuery', 'PHP', 'MySql'],
	},
	{
		id: 5,
		name: 'Mercado',
		image: 'https://via.placeholder.com/150',
		estado: 'terminado',
		tech: ['Java'],
	},
	{
		id: 6,
		name: 'Rick & Morty Api',
		image: 'https://via.placeholder.com/150',
		estado: 'mejorar o descartar',
		tech: ['HTML', 'CSS???', 'Js', 'React'],
	},
	{
		id: 7,
		name: 'Panaderia',
		image: 'https://via.placeholder.com/150',
		estado: 'terminado',
		tech: ['HTML', 'CSS', 'JS', 'jQuery', 'PHP', 'MySql'],
	},

	{
		id: 8,
		name: 'Portafolio',
		image: 'https://via.placeholder.com/150',
		estado: 'falta terminar',
		tech: ['HTML', 'SCSS', 'Js', 'React'],
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
