import './App.css';
import HomePage from './pages/HomePage';
import FaceCollection from './pages/FaceCollection';
import EyesCollection from './pages/EyesCollection';
import LipsCollection from './pages/LipsCollection';
import CheekCollection from './pages/CheekCollection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/faceProducts' element={<FaceCollection />} />
        <Route path='/eyesProducts' element={<EyesCollection />} />
        <Route path='/lipsProducts' element={<LipsCollection />} />
        <Route path='/cheekProducts' element={<CheekCollection />} />
      </Routes>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;