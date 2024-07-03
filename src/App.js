import { Routes, Route } from 'react-router-dom';
import './global/css/reset.css';
import HomePage from "./pages/HomePage/HomePage.js";
import ResumePage from "./pages/ResumePage/ResumePage.js";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
