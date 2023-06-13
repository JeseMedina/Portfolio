import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/reset.css';
import './styles/style.scss';
import Home from './containers/pages/Home';
import Education from './containers/pages/Education';
import Project from './containers/pages/Project';

function App() {
	return (
		<Router>
			<Routes>
				{/* Error404 */}
				<Route path="*" element={<Home />} />

				{/* Home */}
				<Route path="/" element={<Home />} />
				<Route path="/education/:education_id" element={<Education />} />
				<Route path="/project/:project_id" element={<Project />} />
			</Routes>
		</Router>
	);
}

export default App;
