import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'

const SimpleMap = () => {
  // console.log('MY TOKEN >>', process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)

  const [viewPort, setViewPort] = useState(null)
  console.log(setViewPort)

  useEffect(() => {
    console.log(viewPort)
    const getData = async () => {
      const response = await axios.get('/api/places')
      setViewPort(response.data)
    }
    getData()
  }, [])

  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(position => {
  //     const { longitude, latitude } = position.coords
  //     setViewPort({ longitude, latitude })
  //   })
  // }, [])

  if (!viewPort) return null

  return (
    <div className="map-container">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        height='100%'
        width='100%'
        mapStyle='mapbox://styles/mapbox/streets-v11'
        latitude={viewPort[0].latitude}
        longitude={viewPort[0].longitude}
        zoom={10}
      >
        <Marker latitude={viewPort[0].latitude} longitude={viewPort[0].longitude}>
          {viewPort[0].icon}
        </Marker>
      </ReactMapGL>
    </div>
  )

}


export default SimpleMap