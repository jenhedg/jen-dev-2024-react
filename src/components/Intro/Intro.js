import "./Intro.css";

export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro-inner">
          <article className="intro-item">
            <h2 className="intro-title">Hi,I'm Jennifer!</h2>
            <div className="intro-content">
              <p>A Web Developer in Tucson, Arizona. I currently work with <a className="link" href="https://www.simpleviewinc.com">Simpleview Inc.</a>, where I am CMS Developer the Product Implementation team.</p>
              <p>Visit my <a className="link" href="#">Resume</a> to learn more about my experience.</p>
              <p>When I'm not at my computer I enjoy being outdoors, traveling and gardening.</p>
            </div>
            <div className="about">
              <h4>About This site</h4>
              <p>This website is made with <b>React.js.</b> I will elaborate more on this and the wonderful additions I added to this 'lil site, like a theme toggle, and some other cool stuff. Neat React!</p>
              <h4>Resources I used in building this site:</h4>
              <ul>
                <li><a href="https://reactrouter.com/en/main">React Router</a></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}