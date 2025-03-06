import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services"; // Import the new page

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Simple React App</h1>
        <nav>
          <Link to="/">Counter</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
