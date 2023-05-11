import React from 'react'
import { PropTypes } from 'prop-types'

const CastList = ({ cast }) => {
  return (
    <div>
      <h2>Cast:</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.person.id}>{actor.person.name}</li>
        ))}
      </ul>
    </div>
  )
}
CastList.propTypes = {
  cast: PropTypes.array.isRequired
}
export default CastList
