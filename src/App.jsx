import React from 'react'
import Main from './routes/main/Main'
import About from './routes/about/About'
import "./App.scss"
import { Routes, Route } from "react-router-dom";
import Partners from './routes/partners/Partners';
import Nav from './components/nav/Nav';
import Discovery from './components/discovery/Discovery';
import Featured from './components/featured/Featured';
import Trending from './components/trending/Trending';
import Hollywood from './components/hollywood/Hollywood';
import Bollywood from './components/bollywood/Bollywood';
// import Discovery from './components/discovery/Discovery';

const App = () => {
  return (
    <div>
      <>
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>

        <Discovery />
        <Featured />
        <Trending />
        <Hollywood />
        <Bollywood />

      </>
    </div>
  )
}
export default App

