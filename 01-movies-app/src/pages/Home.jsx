import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'

const Home = () => {
  const [series, setSeries] = useState([]) // lista de series
  const [searchTerm, setSearchTerm] = useState('') // palabra para buscar

  // const sendSearch = (search) => {
  //   fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
  //     .then(response => response.json())
  //     .then(data => setSeries(data))
  //     .catch(error => console.error(error))
  // }
  useEffect(() => {
    if (searchTerm) {
      fetch('https://api.tvmaze.com/search/shows?q=' + searchTerm)
        .then(response => response.json())
        .then(data => setSeries(data))
        .catch(error => console.error(error))
    } else {
      setSeries([])
    }
  }, [searchTerm])

  return (
    <div className='container bg-pink rounded-3'>
      <h1>Home</h1>
      <SearchBar handleSearch={setSearchTerm} />
      <div className='row'>
        {series.map(series => {
          if (series.show.image) {
            return (
              <div className='col-sm-3 mb-3' key={series.show.id}>
                <div className='card'>
                  <img className='card-img-top' src={series.show.image.medium} alt={series.show.name} />
                  <div className='card-body'>
                    <h5 className='card-title'>{series.show.name}</h5>
                    <Link to={`serie/${series.show.id}`}>{`Go to ${series.show.name}`}</Link>
                  </div>
                </div>
              </div>
            )
          } else {
            return null
          }
        })}
        {series.filter(series => series.show.image).length === 0 && (
          <div className='col-sm-12 text-center'>
            <h2>Are you ready to find content from your favorite show?📽️🍿</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
