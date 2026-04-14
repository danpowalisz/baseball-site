import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Current from './pages/Current';
import Past from './pages/Past';
import HallOfFame from './pages/HallOfFame';
import Minors from './pages/Minors';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="current" element={<Current />} />
        <Route path="past" element={<Past />} />
        <Route path="hof" element={<HallOfFame />} />
        <Route path="minors" element={<Minors />} />
      </Route>
    </Routes>
  );
}

export default App;
