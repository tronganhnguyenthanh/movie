import React from "react"
import {Route, Routes} from "react-router-dom"
import Footer from "../components/footer/Footer"
import FormMovie from "../components/form/FormMovie"
import Menu from "../components/header/Menu"
import MovieList from "../components/list/MovieList"
import "react-toastify/dist/ReactToastify.css"
const App = () => {
 return (
  <div className="App">
    <Menu/>
    <Routes>
      <Route path="/" element={<FormMovie/>}/>
      <Route path="/movie/list" element={<MovieList/>}/>
    </Routes>
    <Footer/>
  </div>
 )
}
export default App
