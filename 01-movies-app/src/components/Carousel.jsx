import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const [series, setSeries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  }, [])

  const carouselSeries = series.slice(0, 7)

  return (
    <div className='container'>
      <h1>Home</h1>
      <Carousel>
        {carouselSeries.map(series => (
          <Carousel.Item key={series.id}>
            <img
              className='d-block w-100'
              src={series.image.medium}
              alt={series.name}
            />
            <Carousel.Caption>
              <h3>{series.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='row'>
        {series.map(series => (
          <div className='col-sm-3 mb-3' key={series.id}>
            <div className='card'>
              <img className='card-img-top' src={series.image.medium} alt={series.name} />
              <div className='card-body'>
                <h5 className='card-title'>{series.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
