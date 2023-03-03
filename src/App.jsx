import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BuildComponent from './components/BuildComponent'
import Footer from './components/Footer'
import Gmail from './components/Gmail'
import SocialLInks from './components/SocialLInks'
import { About, AllProject, Contact, Header, Navbar, Project, Worked } from './container'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="bg-primaryBg">
      <div className=''>
        <div className='bg-transparent md:bg-cardBg md:drop-shadow-md'>
          <div className='container'>
            <Navbar />
          </div>
        </div>
        <div className='container -z-10'>
          <div className='layout '>
            <div className='h-screen hidden md:block'>
              <SocialLInks />
            </div>
            <div>
              <Header />
              <About />
              <Worked />
              <BuildComponent />
              <Project />
              <AllProject />
              <Contact />
              <Footer />
            </div>
            <div className='flex justify-center'>
              <div className='relative hidden md:block'>
                <Gmail/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
