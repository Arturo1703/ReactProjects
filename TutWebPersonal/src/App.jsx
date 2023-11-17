import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import Resume from "./components/resume/resume";
import About from "./components/about/about";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Blog from "./components/blog/blog";
import Pricing from "./components/pricing/pricing";

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
        <Pricing />
        <Contact />
        <Testimonials />
        <Blog />
      </main>
    </>
  );
}

export default App;
