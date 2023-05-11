import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
    <div>
      <h1>Serie detail: {serie.name} </h1>
      <img src={serie.image.medium} alt={serie.name} />
    </div>
  )
}
export default SerieDetail
