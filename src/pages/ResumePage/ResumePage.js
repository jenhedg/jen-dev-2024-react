import Footer from '../../components/Footer/Footer.js';
import Nav from '../../components/Nav/Nav.js'
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Resume from '../../components/Resume/Resume.js';

import './ResumePage.css';
import '../../global/css/variables.css';
import '../../global/css/mainLayout.css';
import '../../components/Header/Header.css';
import '../../components/Footer/Footer.css';

const resumePage = () => {
  return (
    <div className="resumePage page">
      <div className="page-inner">
        <Nav />
        <Sidebar />
        <main className="main-content">
          <Resume />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default resumePage;