import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "./About.scss"
import Stars from "../../img/star.svg"
const About = () => {
  const [movieId, setMovieId] = useState({})
  const { id } = useParams()
  let movieAbout = useParams()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieAbout.id}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTYzYzEwMTI3ZjBmNDlmZWI3ODhiODVmYzBiNmVmMCIsInN1YiI6IjY1MDFhNDU3MWJmMjY2MDBmZmI2MmM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrp1_wgLkQcXx5wBSVmg_9wO8UkZCJi0ohc5hR_L0ks"
      }
    })
      .then(response => {
        setMovieId(response.data)
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      <div className="flexAboutMain">
        <img className="aboutMovieImg" src={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`} alt="" />

        <div className="about_text">
          <p className="movie_title">{movieId.title}</p>
          <p className="movie_description">{movieId.overview}</p>

          <div className="flex flex_rating">
            <div className="flex_rating_box">
              <div className="flex_rating-star">
                <img src={Stars} alt="" />
                <p>{movieId.vote_average}</p>
              </div>
              <p>{movieId.vote_count} kishi ovoz bergan</p>
            </div>
            <p>Chiqarilgan sana: {movieId.release_date}</p>
          </div>
          <p className="aboutLang">Til: {movieId.original_language}</p>

        </div>

      </div>

    </div>
  )
}

export default About
