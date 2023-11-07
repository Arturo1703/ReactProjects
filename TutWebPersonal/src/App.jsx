import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/home'
import Portfolio from './components/portfolio/portfolio'
import Services from './components/Services/Services'
import Resume from './components/Resume/Resume'
import About from './components/about/about'
import Testimonials from './components/testimonials/testimonials';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import Pricing from './components/pricing/pricing';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Blog/>
        <Contact/>
      </main>
    </>
  )
}

export default App
