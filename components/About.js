import aboutStyles from "../styles/About.module.css";

const About = () => {
	return (
		<section className={aboutStyles.about}>
			<div className="container">
				<h2 className={aboutStyles.about__heading}>About Me</h2>
			</div>
		</section>
	);
};

export default About;
