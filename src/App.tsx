import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'

export function App(){
  return(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}