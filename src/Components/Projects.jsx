import githubIconBlue from "../images/githubLogoBlue.png";
import curriculumLogo from "../images/curriculumLogoBlue.png";
import { projects } from "../Database";

function Projects() {
  return (
    <>
      <h1 id="h1Projects">Projetos</h1>
      <div className="wrapperProjects">
        {projects.map((project) => {
          return (
            <section className="cardProject">
              <img src={project.projectImg} />
              <div className="container">
                <h3>{project.projectName}</h3>
                <h4>Tecnologias utilizadas</h4>
                <p>{project.technologiesUsed}</p>
              </div>
              <div className="projectIcons">
                <a>
                  <img src={githubIconBlue}></img>
                </a>
                <a>
                  <img src={curriculumLogo}></img>
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
export default Projects;
