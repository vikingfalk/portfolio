import navbarStyles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={navbarStyles.navbar}>
			<div className="container">
				<ul className={navbarStyles.menu}>
					<li className={navbarStyles.menu__link}>
						<a href="#">Home</a>
					</li>
					<li className={navbarStyles.menu__link}>
						<a href="#">About</a>
					</li>
					<li className={navbarStyles.menu__link}>
						<a href="#">Projects</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
