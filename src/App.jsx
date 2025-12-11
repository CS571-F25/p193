import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

function App() {
  return (
    <HashRouter>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/Research" element={<Research />} />
            <Route path="/Publications" element={<Publications />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
