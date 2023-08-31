import Header from './Header'
import Home from './Home'
import './assets/App.css'
import {useState,useEffect} from 'react'
function App() {
const [isMobile,setIsMobile]= useState(window.innerWidth <768);
const handleSetMobile = () => {
  setIsMobile(window.innerWidth <768);
}
useEffect(() => {
  handleSetMobile()
  window.addEventListener("resize", handleSetMobile)
  return () => {
      window.removeEventListener("resize",handleSetMobile)
  }
}, [])

  return (
    <>
    <Header mobile={isMobile}/>
    <Home />
    </>
  )
}

export default App
