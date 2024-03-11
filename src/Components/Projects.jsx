import githubIconBlue from "../images/githubLogoBlue.png";
import curriculumLogo from "../images/curriculumLogoBlue.png";
import pdfCurriculum from "../images/histoquimico_pdf.pdf";
import { projects } from "../Database";

function Projects() {
  return (
    <>
      <h1 id="h1Projects">Projetos</h1>
      <div className="wrapperProjects">
        {projects.map((project) => {
          return (
            <section key={project.id} className="cardProject">
              <img src={project.projectImg} />
              <div className="container">
                <h3>{project.projectName}</h3>
                <h4>Tecnologias utilizadas</h4>
                <p>{project.technologiesUsed}</p>
              </div>
              <div className="projectIcons">
                <a target="blank" href="https://github.com/LanaGomes">
                  <img src={githubIconBlue}></img>
                </a>
                <a target="blank" href={pdfCurriculum}>
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
