import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import "./Main.scss"
import { FiPlay } from "react-icons/fi";
import Nav from '../../components/nav/Nav';
import Discovery from '../../components/discovery/Discovery';
import Featured from '../../components/featured/Featured';
import Trending from '../../components/trending/Trending';
import Hollywood from '../../components/hollywood/Hollywood';
import Bollywood from '../../components/bollywood/Bollywood';


const Main = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/top_rated?&with_networks=213", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTYzYzEwMTI3ZjBmNDlmZWI3ODhiODVmYzBiNmVmMCIsInN1YiI6IjY1MDFhNDU3MWJmMjY2MDBmZmI2MmM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrp1_wgLkQcXx5wBSVmg_9wO8UkZCJi0ohc5hR_L0ks"
      }
    })
      .then(response => {
        setBanner(response.data.results);
        console.log(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='main'>
      {/* <Nav /> */}

      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="BannerSwipper"
      >
        {banner.map(imgBanner => (
          <SwiperSlide key={imgBanner.id}>
            <div className="banner_text">
              <strong className='banner_title' >{imgBanner.title}</strong>
              <div className="btns">
                <button> <FiPlay /> PLAY</button>
                <button>MORE</button>
              </div>
            </div>
            <div className="blend">
              
              <img className='banner-bg' src={`https://image.tmdb.org/t/p/original/${imgBanner.backdrop_path}`} alt="" />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Discovery /> */}
      {/* <Featured/> */}
      {/* <Trending/> */}
      {/* <Hollywood/> */}
      {/* <Bollywood/> */}
    </div>
  );
};

export default Main;