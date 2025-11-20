import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Publications from "./components/Publications";
import Hobbies from "./components/Hobbies";
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
            <Route path="/Publications" element={<Publications />} />
            <Route path="/Hobbies" element={<Hobbies />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
