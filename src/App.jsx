import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Navbanner from './components/Navbanner'
import Workplacecontainer from './components/Workplacecontainer'
import Zoomworkplace from './components/Zoomworkplace'
import Card from './components/card'
import Prefooter from './components/Prefooter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Navbar />
      <Navbanner />
      <Workplacecontainer />
      <Zoomworkplace />
      <Card />
      <Prefooter />
      <Footer />

    </>
  )
}

export default App
