import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const SerieDetail = () => {
  const { id } = useParams().id
  const [serie, setSerie] = useState(null)
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/serie/' + id)
      .then(response => response.json())
      .then(data => setSerie(data))
      .catch(error => console.error(error))
  }, [id])
  if (!serie) {
    return <div>Loading...</div>
  }
  return (
    <h1>SerieDetail:{serie.show.name}</h1>
  )
}
export default SerieDetail
