import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const education = [
	{
		id: 1,
		name: 'Tecnicatura Superior en Desarrollo de Software',
		year: '2020 - 2022',
		place: 'IES Juan Mantovani',
	},
	{
		id: 2,
		name: 'Desarrollador Web',
		year: '2022',
		place: 'Informatorio',
	},
	{
		id: 3,
		name: 'Desarrollador Frontend con React',
		year: '2022',
		place: 'Digit@lers - Telecom',
	},
];

console.log(education);

function Education() {
	return (
		<div className="Education">
			<h2 className="Education-h2">Educación</h2>
			<div className="Education-section">
				{education.map(item => (
					<div className="Card" key={item.id}>
						<FontAwesomeIcon className="Card-svg" icon={faCertificate} />
						<p className="Card-p">{item.year}</p>
						<h3 className="Card-h3">{item.name}</h3>
						<p className="Card-p">{item.place}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Education;
