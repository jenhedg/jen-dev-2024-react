import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faCodepen } from '@fortawesome/free-brands-svg-icons'

import '../../global/css/variables.css';
import '../../components/Header/Header.css';
import '../../components/Footer/Footer.css';
import '../../components/Resume/Resume.css';

export default function Resume() {
  return (
    <article className="resume">
      <div className="resume-header">
        <h2 className="resume-title">Jennifer Hedgcock</h2>
        <ul className="contact-list">
          <li className="contact-item">
            <Link to="https://www.visittucson.org/" target="_blank">
              <FontAwesomeIcon icon={faMapLocationDot} /> Tucson, Arizona
            </Link>
          </li>
          <li className="contact-item">
            <Link to="mailto:jennifernhf@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </Link>
          </li>
          <li className="contact-item">
            <Link to="https://github.com/jenhedg" target="_blank">
              <FontAwesomeIcon icon={faGithubAlt} /> Github
            </Link>
          </li>
          <li className="contact-item">
            <Link to="https://codepen.io/sparkleOven" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />Codepen
            </Link>
          </li>
        </ul>
      </div>

      <div className="resume-inner">
        <article className="resume-role">
          <h3 className="resume-title">CMS Developer</h3>
          <h4 className="resume-company"> Simpleview</h4>
          <p className="resume-dates"><i>December 2020 - present</i></p>
          <ul className="resp-list">
            <li>Implement and maintain database-driven CMS product applications, APIs and database integration</li>
            <li>Strategically plan and execute projects within allocated timelines and budget constraints</li>
            <li>Complete work autonomously, collaborating as needed with teammates, lead developer, project manager and XD team.</li>
            <li>Implement front-end designs and wireframes (Figma/Adobe XD/Photoshop) with pixel perfetion.</li>
            <li>Contribute to maintainence and enhancement of CMS front-end framework via Git pull requests.</li>
            <li>Create and maintain documentation for system features and modules in Confluence.</li>
          </ul>
        </article>
        <article className="resume-role">
          <h3 className="resume-title">Front End Developer</h3>
          <h4 className="resume-company">Petsmart</h4>
          <p className="resume-dates"><i>August 2020 - December 2020</i></p>
          <ul className="resp-list">
            <li>Partnered with client-led and internal teams, including offshore QA teams. </li>
            <li>Programmed enterprise-level webapps, microsites and marketing tools.</li>
            <li>Self-led SCSS and front end build tooling refactoring project</li>
            <li>Integrated front-end with Magnolia CMS and Java backend.</li>
            <li>Led daily/weekly releases and deployments. </li>
            <li>Created documentation and style guides for both clients and internal teams.</li>
          </ul>
        </article>
        <article className="resume-role">
          <h3 className="resume-title">Lead Front-End Developer</h3>
          <h4 className="resume-company">Crescendo Collective</h4>
          <p className="resume-dates"><i>February 2016 - Mar 2020</i></p>
          <ul className="resp-list">
            <li>Programmed enterprise-level CMS webapps, microsites and marketing tools</li>
            <li>Collaborated with client-led, internal and offshore QA teams</li>
            <li>Led daily/weekly releases and deployments</li>
          </ul>
        </article>
        <article className="resume-role">
          <h3 className="resume-title">Spanish Tutor</h3>
          <h4 className="resume-company">Wyzant</h4>
          <p className="resume-dates"><i>January 2015 - January 2016</i></p>
          <ul className="resp-list">
            <li>Tutored K-12 and college students with Spanish coursework and test preparation</li>
          </ul>
        </article>
        <article className="resume-role">
          <h3 className="resume-title">Lab Assistant</h3>
          <h4 className="resume-company">Gemological Institute of America</h4>
          <p className="resume-dates"><i>July 2013 - August 2014</i></p>
          <ul className="resp-list">
            <li>Processed 400+ precious stones daily using various diagnostic testing technologies</li>
            <li>Supported research team to develop and test proprietary diagnostic technologies</li>
          </ul>
        </article>
        <article className="education">
          <h3 className="education-title">Education</h3>
          <ul className="education-list">
            <li> AA, Web Development & Design, 2015 - MiraCosta College</li>
            <li>BA, Latin American Studies & Political Science, 2007 - The University of Arizona</li>
          </ul>
        </article>
      </div>
    </article >
  );
}