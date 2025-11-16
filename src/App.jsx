import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProjectsShowcase from './components/Projects'
import SkillsMatrix from './components/SkillsMatrix'

function App() {
  return (
    <div className='bg-gradient-to-br from-black via-gray-900 to-black'>
      <Navbar />
      <Home />
      <SkillsMatrix />
      <ProjectsShowcase />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
