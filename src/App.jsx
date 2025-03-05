import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import About from "./About";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Simple React App</h1>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Counter</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
