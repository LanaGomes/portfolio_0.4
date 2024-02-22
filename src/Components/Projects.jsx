//import { projects } from "../Database";
import cat from "../images/cat.jpg";
import githubIcon from "../images/githubIcon.png";
import externalLinkIcon from "../images/externalLinkIcon.png";
import { projects } from "../Database";

function Projects() {
  return (
    <>
      <div className="wrapperProjects">
        <h1>Projetos</h1>
        <section className="cardProject">
          <img src={cat} />
          <div className="container">
            <h3>Resumo do título do projeto</h3>
            <h4>Tecnologias utilizadas</h4>
            <p>VS Code |Sublime |Text | Atom iTerm2 | Hyper</p>
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
      </div>
    </>
  );
}
export default Projects;
