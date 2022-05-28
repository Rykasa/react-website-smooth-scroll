import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'

export function App(){
  return(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}