import profilePic from "../images/profilePic.jpeg";
import gitHubPic from "../images/gitHubIcon.png";
import externalLinkIcon from "../images/externalLinkIcon.png";
import instaIcon from "../images/instaIcon.png";
import linkedinIcon from "../images/linkedinIcon.png";
import pdfCurriculum from "../images/histoquimico_pdf.pdf";

function About() {
  return (
    <div className="wrapperAbout">
      <img id="profilePic" src={profilePic} />
      <div className="wrapperTextsAbout">
        <h1>Lana Gomes</h1>
        <h2>Desenvolvimento Web</h2>
      </div>

      <div className="IconsAbout">
        <a target="blank" href="https://www.instagram.com/lanahermana/">
          <img src={instaIcon}></img>
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/lana-gomes-b622981ab/"
        >
          <img src={linkedinIcon}></img>
        </a>
        <a target="blank" href="https://github.com/LanaGomes">
          <img src={gitHubPic}></img>
        </a>
        <a target="blank" href={pdfCurriculum}>
          <img src={externalLinkIcon}></img>
        </a>
      </div>
      <p>lana.gomes1919@gmail.com</p>
    </div>
  );
}
export default About;
