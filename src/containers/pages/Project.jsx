import Layout from '../Layout';
import { useParams } from 'react-router-dom';
import projects from '../../../public/Projects';
import Error404 from '../errors/error404';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Project() {
	const params = useParams();
	const id = params.project_id;
	const projectItem = projects.find(item => item.id === parseInt(id));

	if (!projectItem) {
		return <Error404 />;
	}

	return (
		<Layout>
			<div className="Main">
				<div className="Project">
					<div className="Project-content">
						<h2 className="Project-h2">{projectItem.name}</h2>

						<p className="Project-p">
							<span className="Project-span">Estado: </span>
							{projectItem.estado}
						</p>
						<p className="Project-p">
							<span className="Project-span">Tecnologías utilizadas: </span>
							{projectItem.tech.join(', ')}
						</p>
						{projectItem.description ? (
							<p className="Project-p">
								<span className="Project-span">Descripción: </span>
								{projectItem.description}
							</p>
						) : (
							<></>
						)}
						<div className="Project-links">
							<a
								href={projectItem.github}
								target="_blank"
								rel="noopener noreferrer"
								className="Hero-a"
								aria-label="Github"
							>
								<FontAwesomeIcon icon={faGithub} className="Hero-svg" />
							</a>
							<a
								href={projectItem.web}
								target="_blank"
								rel="noopener noreferrer"
								className="Hero-a"
								aria-label="Web"
							>
								<FontAwesomeIcon icon={faGlobe} className="Hero-svg" />
							</a>
						</div>
					</div>
					<img className="Project-img" src={projectItem.image} alt={projectItem.name} />
				</div>
			</div>
		</Layout>
	);
}

export default Project;
