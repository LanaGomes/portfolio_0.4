import profilePic from "../images/profilePic.jpeg";
import gitHubPic from "../images/gitHubIcon.png";
import externalLinkIcon from "../images/externalLinkIcon.png";
import instaIcon from "../images/instaIcon.png";
import linkedinIcon from "../images/linkedinIcon.png";

function About() {
  return (
    <div className="wrapperAbout">
      <section className="wrapperImgTitleAbout">
        <img id="profilePic" src={profilePic} />
        <div className="wrapperTextsAbout">
          <h1>Lana Gomes</h1>
          <h2>Desenvolvimento Web</h2>
        </div>
      </section>
      <div className="IconsAbout">
        <a>
          <img src={instaIcon}></img>
        </a>
        <a>
          <img src={linkedinIcon}></img>
        </a>
        <a>
          <img src={gitHubPic}></img>
        </a>
        <a>
          <img src={externalLinkIcon}></img>
        </a>
      </div>
      <p>lana.gomes1919@gmail.com</p>
    </div>
  );
}
export default About;
