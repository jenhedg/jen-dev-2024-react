import Footer from '../../components/Footer/Footer.js';
// import Resume from '../../components/Resume/Resume.js';

import '../../global/css/variables.css';
import '../../global/css/mainLayout.css';
import '../../components/Header/Header.css';
import '../../components/Footer/Footer.css';

const resumePage = () => {
  return (
    <div className="resumePage page">
      <div className="page-inner">
        <main className="main-content">
          {/* <Resume /> */}
          <h1>resume page</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default resumePage;