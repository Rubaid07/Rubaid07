import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProjectsShowcase from './components/Projects'
import SkillsMatrix from './components/SkillsMatrix'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SkillsMatrix />
      <ProjectsShowcase />
      <Contact />
      <Footer />
    </>
  )
}

export default App
