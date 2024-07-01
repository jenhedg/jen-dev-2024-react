export default function Resume() {
  return (
    <article className="resume">
      <div className="resume-inner">
        <article className="resume-summary">
          <p>I have 8 years of experience planning and building modern, scalable webapps. I have collaborated with teams of all sizes, in varying industries across the globe. Much of my experience consists of creating and maintaining large-scale systems and CMS implementations. I also have experience with analytics and UI planning and dev ops. I'm not afraid to roll up my sleeves and dig into solutions. Googling is one of my top strengths!</p>
        </article>
        <article className="position">
          <h4>Simpleview Inc.</h4>
          <span><b><i>December 2020 - present</i></b></span>
          <ul className="responsibilities">
            <li>Implement and maintain database-driven CMS product applications, integrating with various APIs and databases</li>
            <li>Strategically plan and execute projects within allocated timelines and budget constraints</li>
            <li>Complete work autonomously, collaborating as needed with teammates, lead developer, project manager and XD team.</li>
            <li>Implement front-end designs and wireframes (Figma/Adobe XD/Photoshop) with pixel perfetion.</li>
            <li>Contribute to maintainence and enhancement of CMS front-end framework via Git pull requests.</li>
            <li>Create and maintain documentation for system features and modules in Confluence.</li>
          </ul>
        </article>
        <article className="position">
          <h4>PetSmart</h4>
          <span><b><i>August 2020 - December 2020</i></b></span>
          <ul className="responsibilities">
            <li>Partnered with client-led and internal teams, including offshore QA teams. </li>
            <li>Programmed enterprise-level webapps, microsites and marketing tools.</li>
            <li>Self-led SCSS and front end build tooling refactoring project</li>
            <li>Integrated front-end with Magnolia CMS and Java backend.</li>
            <li>Led daily/weekly releases and deployments. </li>
            <li>Created documentation and style guides for both clients and internal teams.</li>
          </ul>
        </article>
      </div>
    </article>
  );
}