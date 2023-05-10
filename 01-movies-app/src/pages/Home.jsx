import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [series, setSeries] = useState([]) // lista de series
  const [searchTerm, setSearchTerm] = useState('') // palabra para buscar

  const sendSearch = (search) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  }
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='container bg-pink rounded-3'>
      <h1>Home</h1>
      <SearchBar handleSearch={sendSearch} />
      <div className='row'>
        {
            series.map(series => (
              <div className='col-sm-3 mb-3' key={series.id}>
                <div className='card'>
                  <img className='card-img-top' src={series.image.medium} alt={series.name} />
                  <div className='card-body'>
                    <h5 className='card-title'>{series.name}</h5>
                  </div>
                </div>
              </div>

            ))
        }

      </div>

    </div>
  )
}

export default Home
