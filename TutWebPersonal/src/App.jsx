import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import Resume from "./components/resume/resume";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
