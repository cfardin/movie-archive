import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/favorites' element = {<Favorites></Favorites>}></Route>
      </Routes>
    </main>
  )
}

export default App
