import { useState } from 'react';

function Skills() {
	const [skillsSection, setSkillsSection] = useState(true);

	return (
		<div className="Skills" id="skills">
			<h2 className="Skills-h2">Habilidades</h2>
			<div className="Skills-btns">
				<button
					className={`Skills-btn ${skillsSection ? 'isActive' : ''}`}
					onClick={() => setSkillsSection(true)}
				>
					Técnicas
				</button>
				<button
					className={`Skills-btn ${!skillsSection ? 'isActive' : ''}`}
					onClick={() => setSkillsSection(false)}
				>
					Blandas
				</button>
			</div>
			{skillsSection ? (
				<div className="Skills-section">
					<div className="Skills-category">
						<h3 className="Skills-h3">Frontend</h3>
						<ul className="Skills-ul">
							<li className="Skills-li">HTML</li>
							<li className="Skills-li">CSS</li>
							<li className="Skills-li">SCSS</li>
							<li className="Skills-li">JS</li>
							<li className="Skills-li">React</li>
							<li className="Skills-li">Bootstrap</li>
						</ul>
					</div>
					<div className="Skills-category">
						<h3 className="Skills-h3">Backend</h3>
						<ul className="Skills-ul">
							<li className="Skills-li">PHP</li>
							<li className="Skills-li">JAVA</li>
							<li className="Skills-li">Python</li>
							<li className="Skills-li">DRF</li>
							<li className="Skills-li">MySql</li>
							<li className="Skills-li">Postgresql</li>
						</ul>
					</div>
					<div className="Skills-category">
						<h3 className="Skills-h3">Herramientas</h3>
						<ul className="Skills-ul">
							<li className="Skills-li">Eslint</li>
							<li className="Skills-li">Prettier</li>
							<li className="Skills-li">Git</li>
							<li className="Skills-li">Github</li>
							<li className="Skills-li">Vscode</li>
						</ul>
					</div>
				</div>
			) : (
				<div className="Skills-section">
					<ul className="Skills-ul">
						<li className="Skills-li">Pensamiento Crítico</li>
						<li className="Skills-li">Resiliencia</li>
						<li className="Skills-li">Aprendizaje Constante</li>
						<li className="Skills-li">Responsabilidad</li>
						<li className="Skills-li">Comunicacion Asertiva</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default Skills;
