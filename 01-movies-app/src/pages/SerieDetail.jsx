import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
const SerieDetail = () => {
  const { id } = useParams()
  const [serie, setSerie] = useState(null)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setSerie(data))
      .catch(error => console.error(error))
  }, [id])

  if (!serie) {
    return <div>Loading...</div>
  }
  return (
    <div className='container col-6 mt-4 bg-pink rounded-3 p-3'>
      <div className='card bg-pink   '>
        <div className='card-header mx-auto text-center'>
          <h1> {serie.name} </h1>
          <p><NavLink to={serie.officialSite} target='_blank'>{`Official Site: ${serie.officialSite}`}</NavLink></p>
          <img src={serie.image.medium} className='mx-auto d-block' alt={serie.name} />
          <p>{serie.character}</p>
        </div>
      </div>
    </div>
  )
}
export default SerieDetail
