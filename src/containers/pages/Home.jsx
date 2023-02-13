import Layout from '../Layout';
import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Education from '../../components/education/Education';

function Home() {
	return (
		<Layout>
			<div className="Main">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Education />
			</div>
		</Layout>
	);
}

export default Home;
