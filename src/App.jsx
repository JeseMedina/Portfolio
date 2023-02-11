import Error404 from './containers/errors/Error404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/reset.css';
import './styles/style.scss';
import Home from './containers/pages/Home';

function App() {
	return (
		<Router>
			<Routes>
				{/* Error404 */}
				<Route path="*" element={<Error404 />} />
				{/* Home */}
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
