import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Boat from './components/Boat'
import Tickets from './components/Tickets'
import PracticalInfo from './components/PracticalInfo'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Boat />
      <Gallery />
      <Tickets />
      <PracticalInfo />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
