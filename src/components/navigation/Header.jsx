import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<header className="Header">
			<h1 className="Header-h1">
				<a href="/#hero" className="Header-a" aria-label="Home">
					Jesé Medina
				</a>
			</h1>
			<button className="Header-btn" onClick={toggleMenu} aria-label="Menú">
				<FontAwesomeIcon className="Header-svg" icon={faBars} />
			</button>
			<nav className={`Header-nav ${menu ? 'isActive' : ''}`}>
				<ul className="Header-ul">
					<li className="Header-li" onClick={toggleMenu}>
						<a href="/#about-me" className="Header-a">
							Sobre mí
						</a>
					</li>
					<li className="Header-li" onClick={toggleMenu}>
						<a href="/#skills" className="Header-a">
							Habilidades
						</a>
					</li>
					<li className="Header-li" onClick={toggleMenu}>
						<a href="/#projects" className="Header-a">
							Proyectos
						</a>
					</li>
					<li className="Header-li" onClick={toggleMenu}>
						<a href="/#education" className="Header-a">
							Educación
						</a>
					</li>
					<li className="Header-li" onClick={toggleMenu}>
						<a href="/#contact" className="Header-a">
							Contacto
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
