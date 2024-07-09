import Footer from '../../components/Footer/Footer.js';
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Resume from '../../components/Resume/Resume.js';

import '../../global/css/variables.css';
import '../../global/css/mainLayout.css';
import '../../components/Header/Header.css';
import '../../components/Footer/Footer.css';

const resumePage = () => {
  return (
    <div className="resumePage page">
      <div className="page-inner">
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