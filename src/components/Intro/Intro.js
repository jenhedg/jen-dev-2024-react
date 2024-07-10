import { Link } from 'react-router-dom';
import Button from "../../components/Button/Button.js";
import "./Intro.css";
import "../../components/Button/Button.css";


export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro-inner">
          {/* <figure>
            <img
              className="intro-img"
              src="https://placehold.co/250x250"
              alt="Jennifer Hedgcock, Web Developer"
            />
          </figure> */}
          <article className="intro-item">
            <h2 className="intro-title">Hi, I'm Jennifer</h2>
            <div className="intro-content">
              <p className="intro-subtitle"> I am a Front End Web Developer in Tucson, Arizona. </p>
              <p className="intro-text">I currently work on the Product Implementation Team at <a className="link" href="https://www.simpleviewinc.com">Simpleview</a> where I build websites and CMS tools for destination marketing organizations across the globe.</p>
              <p className="intro-text">I possess nearly 8 years of development experience in planning, building and maintaining data-driven webapps of all sizes. I particularly enjoy creating scalable frameworks and CMS implementations, UI planning,and client and developer-centered documentation. See my <Link className="link" to="/resume">Resume</Link> to learn more.</p>
              <p className="intro-text">
                When I'm not at my computer I enjoy caring for my plant babies (all 60 and counting...) and spending time outdoors in my beautiful home here in the Sonoran desert.
              </p>
            </div>
            <div className="btn-wrapper">
              <Button className="btn" name="resume" to="/resume"></Button>
            </div>
            {/* <div className="intro-content resource-list">
                <h4>Resources I used in building this site:</h4>
                <ul>
                  <li><a className="link" href="https://create-react-app.dev/" target="_blank">Create React App</a></li>
                  <li><a className="link" href="https://reactrouter.com/en/main" target="_blank">React Router</a></li>
                  <li><a className="link" href="https://docs.fontawesome.com/web/use-with/react/" target="_blank">Font Awesome 6</a></li>
                </ul>
              </div> */}

          </article>
        </div>
      </div>
    </>
  );
}