import '../styles/index.css'
import '../services/api'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Equipment from '../pages/Equipment'

const App: React.FC = () => {

  return (
    <>
    <div className="font-SFPro">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/equipment/:type/:id" element={<Equipment />} />
      </Routes>
      </div>
    </>
  )
}

export default App;