import { useState, useEffect } from 'react'

const Home = () => {
  const [series, setSeries] = useState([]) // lista de series
  const [searchTerm, setSearchTerm] = useState('') // palabra para buscar

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='container bg-pink'>
      <h1>Home</h1>
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
