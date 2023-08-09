import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import MovieDetails from './MovieDetails'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function App() {


  return (
<BrowserRouter>
<Header />
<Routes>
<Route path='/' element = {<Homepage />}/>
<Route path='/movieDetails' element = {<MovieDetails />}/>
<Route path='*' element = {<Homepage />}/>
</Routes>
<Footer />
</BrowserRouter>
  )
}

export default App
