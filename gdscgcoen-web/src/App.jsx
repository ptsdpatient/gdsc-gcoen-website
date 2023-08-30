import Header from './Header'
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
    </>
  )
}

export default App
