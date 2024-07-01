import "./Intro.css";

export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro-inner">
          <article className="intro-item">
            <h2 className="intro-title">Hi,I'm Jennifer!</h2>
            <div className="intro-content">
              <p> I am a Web Developer in Tucson, Arizona. I currently work with <a className="link" href="https://www.simpleviewinc.com">Simpleview Inc.</a>, where I am CMS Developer the Product Implementation team.</p>
              <p>Visit my <a className="link" href="#">Resume</a> to learn more about my experience.</p>
            </div>
            <div className="intro-content">
              <p>This website is made with <b>React.js.</b> I will elaborate more on this and the wonderful new featured I've added to this site, like a theme toggle, and some other cool stuff. Neat React!</p>
            </div>
            <div className="intro-content resource-list">
              <h4>Resources I used in building this site:</h4>
              <ul>
                <li><a className="link" href="https://create-react-app.dev/" target="_blank">Create React App</a></li>
                <li><a className="link" href="https://reactrouter.com/en/main" target="_blank">React Router</a></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}