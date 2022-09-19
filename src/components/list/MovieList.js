import React, {useEffect, useState} from "react"
import axios from "axios"
import moment from "moment"
import { Link } from "react-router-dom"
const MovieList = () => {
  const [movies, setMovieList] = useState([])
  useEffect(() => {
   getListMovies()
  },[])
  const getListMovies = () => {
   axios.get("http://localhost:8080/api/movie/list").then((res) => {
    setMovieList(res?.data)
   })
  }
  return (
   <div className="container mx-auto gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-2">
      {movies?.map((i) => {
        return(
          <Link to="/" key={i?._id}>
            <div className="card p-2">
              <h1 className="text-center text-2xl">{i?.movie_name}</h1>
              <div className="image">
                <img src={i?.movie_avatar} alt=""/>
              </div>
              <p className="text-center whitespace-nowrap text-content">{i?.movie_content}</p>
              <span className="flex justify-end p-2 text-blue-500">{moment(i?.movie_date).format("DD/MM/YYYY")}</span>
            </div>
          </Link>
        )
       })
      }
   </div>
  )
}

export default MovieList