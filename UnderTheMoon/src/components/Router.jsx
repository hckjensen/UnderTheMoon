import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Concepts from '../pages/Concepts/Concepts';
import Loyalty from '../pages/Loyalty/Loyalty';
import '../App.scss'

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/concepts" element={<Concepts />} />
                <Route path="/loyalty" element={<Loyalty />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;