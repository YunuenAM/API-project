import { useState, useEffect } from 'react'

const Home = () => {
  const [series, setSeries] = useState([]) // lista de series
  const [searchTerm, setSearchTerm] = useState('') // palabra para buscar

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/1/images')
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='container'>
      <h1>Home</h1>
      <div className='row'>
        {
            series.map(series => (
              <div className='col-sm-3 mb-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>{series.type}</h5>
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
