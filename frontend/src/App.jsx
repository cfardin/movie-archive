import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie = {{title : "cars", release_date : "2024"}}></MovieCard>
    </>
  )
}

export default App
