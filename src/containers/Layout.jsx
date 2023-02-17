import Header from '../components/navigation/Header';
// import Footer from '../components/footer/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
