import './App.css'
import { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Games from './components/Games'
import Tools from './components/Tools'
import News from './components/News'
import Recipe from './components/RecipeApp/Recipe'
import PlantHome from './components/PlantApp-2/PlantHome'
import BitsAndPieces from './components/BitsAndPieces'

export const DisplayContext = createContext()

function App () {
  return (
    <DisplayContext.Provider value={[]}>
      <Router>
        <div className='App'>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/website' element={<Home />} />
            <Route path='/website/news' element={<News />} />
            <Route path='/website/about' element={<About />} />
            <Route path='/website/recipe' element={<Recipe />} />
            <Route path='/website/games' element={<Games />} />
            <Route path='/website/tools' element={<Tools />} />
            <Route path='/website/plant' element={<PlantHome />} />
            <Route path='/website/bits' element={<BitsAndPieces />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DisplayContext.Provider>
  )
}

export default App
