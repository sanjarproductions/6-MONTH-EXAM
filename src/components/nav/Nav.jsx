import React, { useState } from 'react'
import "./Nav.scss"
import "./Nav.scss"
import Logo from "../../img/logo.png"
import { Container } from '../../utils/Utils';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [country, setCountry] = useState([])

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/watch/providers/regions", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTYzYzEwMTI3ZjBmNDlmZWI3ODhiODVmYzBiNmVmMCIsInN1YiI6IjY1MDFhNDU3MWJmMjY2MDBmZmI2MmM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrp1_wgLkQcXx5wBSVmg_9wO8UkZCJi0ohc5hR_L0ks"
      }
    })
      .then(response => {
        setCountry(response.data.results);
        console.log(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (

    <div className='nav-wrapper'>
      <Container>
        <div className="flex-nav">
          <div>
            <h1><img className='logo' src={Logo} alt="" /></h1>
            <ul>
              <li><Link to={`/`}>HOME</Link> </li>
              <li>TV-SHOWS</li>
              <li>MOVIES</li>
              <li>NEW</li>
              <li> <Link to={`/partners`}>PARTNERS</Link> </li>
            </ul>
          </div>
          <div>
            <select>
              {
                country?.map(lang => {
                  return(
                    <option>{lang.english_name}</option>
                  )
                })
              }
            </select>

            <input type="Search" placeholder='Search' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Nav
