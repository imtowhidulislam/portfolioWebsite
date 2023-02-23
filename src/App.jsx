import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
// import './App.css'
import { About, AllProject, Contact, Header, Project, Worked } from './container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primaryBg">
      <div className='container'>
        <Header />
        <About />
        <Worked />
        <Project />
        <AllProject />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
