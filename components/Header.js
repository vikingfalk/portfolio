import headerStyles from "../styles/Header.module.css";
import Button from "./Button";

const Header = () => {
	return (
		<header className={headerStyles.header}>
			<div className="container">
				<img className={headerStyles.header__pic} src="profile.jpg" alt="profile picture" />
				<h1 className={headerStyles.header__name}>Viking Falk</h1>
				<h2 className={headerStyles.header__profession}>- Fullstack JavaScript Developer -</h2>
				<Button text="See my projects" />
			</div>
			<div className={headerStyles.overlay} />
		</header>
	);
};

export default Header;
