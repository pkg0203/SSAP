
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './componenets/header/Header'
import Footer from './componenets/Footer'

function App() {

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <div className='min-h-[calc(100vh-136px)]'>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
