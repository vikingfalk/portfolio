import aboutStyles from "../styles/About.module.css";

const About = () => {
	return (
		<section className={aboutStyles.about}>
			<div className="container">
				<h2 className={aboutStyles.about__heading}>About Me</h2>
				<div className={aboutStyles.grid}>
					<article className={aboutStyles.card + " " + aboutStyles.bg}>
						<h3 className={aboutStyles.card__heading}>my-background:</h3>
						<p>
							My background is very awesome in a lot of ways. My background is very awesome in a lot
							of ways. My background is very awesome in a lot of ways. My background is very awesome
							in a lot of ways.
						</p>
					</article>
					<article className={aboutStyles.card + " " + aboutStyles.exp}>
						<h3 className={aboutStyles.card__heading}>my-experience:</h3>
						<p>My background is very awesome in a lot of ways.</p>
					</article>
					<article className={aboutStyles.card + " " + aboutStyles.int}>
						<h3 className={aboutStyles.card__heading}>my-interests:</h3>
						<p>
							My background is very awesome in a lot of ways. My background is very awesome in a lot
							of ways. My background is very awesome in a lot of ways.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default About;
