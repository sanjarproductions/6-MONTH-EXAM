import React from 'react'
import "./Partners.scss"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Partners = () => {
  const [partnersData, setpartnersData] = useState([])
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/watch/providers/movie", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTYzYzEwMTI3ZjBmNDlmZWI3ODhiODVmYzBiNmVmMCIsInN1YiI6IjY1MDFhNDU3MWJmMjY2MDBmZmI2MmM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrp1_wgLkQcXx5wBSVmg_9wO8UkZCJi0ohc5hR_L0ks"
      }
    })
      .then(response => {
        setpartnersData(response.data.results);
        console.log(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className='partners-main'>
      {partnersData?.map(data =>
        <>
          <div className="partner">
            < img src={`https://image.tmdb.org/t/p/original/${data.logo_path}`} alt="" />
            <p>Tillar : {data.display_priority}</p>
          </div>


        </>
      )
      }
    </div>
  )
}

export default Partners
