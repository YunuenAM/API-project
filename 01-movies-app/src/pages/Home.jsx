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
    </div>

  )
}

export default Home
