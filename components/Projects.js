import projectsStyles from "../styles/Projects.module.css";

const Projects = () => {
	return (
		<section className={projectsStyles.projects}>
			<div className="container">
				<h2 className={projectsStyles.projects__heading}>My Projects</h2>
			</div>
		</section>
	);
};

export default Projects;
