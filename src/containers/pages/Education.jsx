import Layout from '../Layout';
import education from '../../../public/education';
import { useParams } from 'react-router';
import ProjectsList from '../../components/projects/ProjectsList';
import Error404 from '../errors/error404';

function Education() {
	const params = useParams();
	const id = params.education_id;
	const educationItem = education.find(item => item.id === parseInt(id));

	if (!educationItem) {
		return <Error404 />;
	}

	const haveItems = educationItem.projects[0] === 'none';
	return (
		<Layout>
			<div className="Main">
				<div className="Education">
					<h3 className="Education-h3">{educationItem.place}</h3>
					<h2 className="Education-h2">
						{educationItem.name} ({educationItem.year})
					</h2>
					{educationItem.summary ? (
						educationItem.summary.map(item => (
							<p className="Education-p" key={item.text}>
								{item.text}
							</p>
						))
					) : (
						<></>
					)}
					{educationItem.projects && !haveItems ? (
						<>
							<h2 className="Projects-h2">Proyectos</h2>
							<div className="Projects-section">
								<ProjectsList projectIds={educationItem.projects} />
							</div>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</Layout>
	);
}

export default Education;
