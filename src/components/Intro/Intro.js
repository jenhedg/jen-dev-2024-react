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
              {/* <div className="intro-content resource-list">
                <h4>Resources I used in building this site:</h4>
                <ul>
                  <li><a className="link" href="https://create-react-app.dev/" target="_blank">Create React App</a></li>
                  <li><a className="link" href="https://reactrouter.com/en/main" target="_blank">React Router</a></li>
                </ul>
              </div> */}
            </div>
            <div className="btn-wrapper">
              <Button className="btn" name="resume"></Button>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}