import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import About from "./About";
import Contact from "./Contact"; // Import the new page

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Simple React App</h1>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Counter</Link>
          <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

