import { Link } from 'react-router-dom';

import '../../global/css/variables.css';
import '../../components/Header/Header.css';
import '../../components/Footer/Footer.css';
import '../../components/Resume/Resume.css';

export default function Resume() {
  return (
    <article className="resume">
      <div className="resume-intro">
        <h2 className="resume-title">Jennifer Hedgcock</h2>
        <ul className="contact-list">
          <li className="contact-item"><Link to="mailto:jennifernhf@gmail.com" target="_blank">Email Me</Link></li>
          <li className="contact-item"><Link to="https://github.com/jenhedg" target="_blank">Github</Link></li>
          <li className="contact-item"><Link to="https://codepen.io/sparkleOven" target="_blank">Codepen</Link></li>
        </ul>
      </div>

      <div className="resume-inner">
        <article className="position">
          <h3><span>CMS Developer,</span> Simpleview</h3>
          <p><b><i>December 2020 - present</i></b></p>
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
          <h3><span>Front-End Developer,</span> PetSmart</h3>
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
        <article className="position">
          <h3><span>Lead Front-End Developer,</span> Crescendo Collective</h3>
          <span><b><i>February 2016 - Mar 2020</i></b></span>
          <ul className="responsibilities">
            <li>Programmed enterprise-level CMS webapps, microsites and marketing tools</li>
            <li>Collaborated with client-led, internal and offshore QA teams</li>
            <li>Led daily/weekly releases and deployments</li>
          </ul>
        </article>
        <article className="position">
          <h3><span>Spanish Tutor,</span>- Wyzant</h3>
          <span><b><i>January 2015 - January 2016</i></b></span>
          <ul className="responsibilities">
            <li>Tutored K-12 and college students with Spanish coursework and test preparation</li>
          </ul>
        </article>
        <article className="position">
          <h3><span>Lab Assistant</span>- Gemological Institute of America</h3>
          <span><b><i>July 2013 - August 2014</i></b></span>
          <ul className="responsibilities">
            <li>Processed 400+ precious stones daily using various diagnostic testing technologies</li>
            <li>Supported research team to develop and test proprietary diagnostic technologies</li>
          </ul>
        </article>
        <article className="education">
          <h3 className="education-title">Education</h3>
          <ul>
            <li> AA, Web Development & Design, 2015 - MiraCosta College</li>
            <li>BA, Latin American Studies & Political Science, 2007 - The University of Arizona</li>
          </ul>
        </article>
      </div>
    </article >
  );
}