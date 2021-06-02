import buttonStyles from "../styles/Button.module.css";

const Button = ({ text }) => {
	return (
		<button className={buttonStyles.button}>
			{text}
			<span className="material-icons">chevron_right</span>
		</button>
	);
};

export default Button;
