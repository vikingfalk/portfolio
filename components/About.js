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
						<div className={aboutStyles.pill}>React.js</div>
						<div className={aboutStyles.pill}>Redux</div>
						<div className={aboutStyles.pill}>Angular</div>
						<div className={aboutStyles.pill}>Next.js</div>
						<div className={aboutStyles.pill}>TDD</div>
						<div className={aboutStyles.pill}>TypeScript</div>
						<div className={aboutStyles.pill}>GraphQL</div>
						<div className={aboutStyles.pill}>Node.js</div>
						<div className={aboutStyles.pill}>SQL</div>
						<div className={aboutStyles.pill}>RESTful API</div>
						<div className={aboutStyles.pill}>MongoDB</div>
						<div className={aboutStyles.pill}>Git</div>
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
