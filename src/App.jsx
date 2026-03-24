import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
