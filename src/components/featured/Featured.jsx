import React from 'react'
import "./Featured.scss"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Featured = () => {
    const exceptions = ["/partners"];
    const location = useLocation()
    const [discroveryMovie, setDiscroveryMovie] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?&with_genres=28", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTYzYzEwMTI3ZjBmNDlmZWI3ODhiODVmYzBiNmVmMCIsInN1YiI6IjY1MDFhNDU3MWJmMjY2MDBmZmI2MmM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrp1_wgLkQcXx5wBSVmg_9wO8UkZCJi0ohc5hR_L0ks"
            }
        })
            .then(response => {
                setDiscroveryMovie(response.data.results);
                console.log(response.data.results);
            })
            .catch(err => console.log(err));
    }, []);
    return !exceptions.includes(location.pathname) ? (
        <div className='slider-wrapper'>
            <h1>Featured</h1>

            <Swiper slidesPerView={4} spaceBetween={350} freeMode={true} modules={[FreeMode, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="SwiperDiscovery">

                {
                    discroveryMovie?.map(moviePic =>
                        <>
                            <SwiperSlide>
                                <div className="discrovery_movies-wrapper">
                                    <div className="discrovery_movie__wrapper">
                                        <Link to={`/about/${moviePic.id}`}>
                                            <img className='featured_movie' src={`https://image.tmdb.org/t/p/original/${moviePic.backdrop_path}`} alt="" />
                                        </Link>

                                    </div>

                                </div>
                            </SwiperSlide>

                        </>

                    )
                }

            </Swiper>

        </div>
    ) : <></>
}

export default Featured
