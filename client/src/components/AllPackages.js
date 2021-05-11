import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LargeTile from './LargeTile'
import Navbar from '../Navbar'
import Carousel from 'react-bootstrap/Carousel'




const AllPackages = () => {



  const [packages, setPackages] = useState([])
  const [toggle, setToggle] = useState(null)


  const handleClick = (event) => {
    console.log('CLICKED', event.target.value)
    setToggle(event.target.value)
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/packages')
      const summerPackages = data.filter(item => {
        return (item.season === 'Summer')
      })
      const winterPackages = data.filter(item => {
        return (item.season === 'Winter')
      })
      if (toggle === 'Summer') {
        setPackages(summerPackages)
      } else if (toggle === 'Winter') {
        setPackages(winterPackages)
      } else {
        setPackages(data)
      }
    }
    getData()
  }, [toggle])




  if (packages.length < 1) return null

  return (
    <>
      <div className="packages-shadow">

      </div>
      <div className="caption">
        <p className="p-caption">Explore Iceland</p>
      </div>
      <Navbar className="nav-grey" />
      <div div className="packages-container">
        <div>
          <Carousel id="carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/jeremy-bishop-h7bQ8VEZtws-unsplash.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/jon-flobrant-tSsb28hzZSI-unsplash.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/daniel-schoibl-oRNruBJQqfo-unsplash.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="scroll-filter" >
          <div className="button-bar">
            <div className="drop-downs">
            </div>
          </div>
          <div className="filters">
            <button className="filter-button" value="Summer" onClick={handleClick}>Summer</button>
            <button className="filter-button" value="Winter" onClick={handleClick}>Winter</button>
            <button className="filter-button" value="All" onClick={handleClick}>All</button>
          </div>
          <ul className="packages-ul" id="no-scroll1">
            {packages.map(trip => (
              <LargeTile key={trip._id} {...trip} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )

}

export default AllPackages
