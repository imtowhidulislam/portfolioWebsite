import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Gmail from './components/Gmail'
import SocialLInks from './components/SocialLInks'
import { About, AllProject, Contact, Header, Navbar, Project, Worked } from './container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primaryBg">
      <div className='container'>
        <Navbar />
        <div className='layout'>
          <div>
            <SocialLInks />
          </div>
          <div>
            <Header />
            <About />
            <Worked />
            <Project />
            <AllProject />
            <Contact />
            <Footer />
          </div>
          <div>
            <Gmail />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
