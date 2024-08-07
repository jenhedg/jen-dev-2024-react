import Nav from '../../components/Nav/Nav.js'
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Footer from '../../components/Footer/Footer.js';
import Intro from "../../components/Intro/Intro.js";

import '../../global/css/variables.css';
import '../../global/css/mainLayout.css';
import './HomePage.css';
import '../../components/Header/Header.css';
import '../../components/Footer/Footer.css';

const HomePage = () => {
  return (
    <div className=" page homePage">
      <div className="page-inner">
        <Nav />
        <Sidebar />
        <main className="main-content">
          <Intro />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
