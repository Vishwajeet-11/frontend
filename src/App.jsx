import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import './css//App.css';
import Favorite from "./pages/Favorites";
import Home from './pages/Home';
function App() {
  return (
    <div>
      <NavBar/>
    <main className="main-content">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favorite/>}/>
    </Routes>
    </main>
    </div>
  )
}


export default App
