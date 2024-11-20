
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import  { Toaster } from 'react-hot-toast';



function App() {

  return (
    <>
<div>
        <Header />
  
        <Home />
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
</div>
<Toaster />
    </>
  )
}

export default App
