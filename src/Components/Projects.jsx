import githubIcon from "../images/githubIcon.png";
import externalLinkIcon from "../images/externalLinkIcon.png";
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
                  <img src={githubIcon}></img>
                </a>
                <a>
                  <img src={externalLinkIcon}></img>
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
