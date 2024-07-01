// import Header from "../../components/Header/Header.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Footer from '../../components/Footer/Footer.js';
import Resume from '../../components/Resume/Resume.js';
import Intro from "../../components/Intro/Intro.js";

import '../../global/css/variables.css';
import '../../global/css/mainLayout.css';
import './HomePage.css';
import '../../components/Header/Header.css';
import '../../components/Footer/Footer.css';

const HomePage = () => {
  return (
    <div className="homePage page">
      <div className="page-inner">
        {/* <Header /> */}
        <Sidebar />
        <main className="main-content">
          <Intro />
          {/* <Resume /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
