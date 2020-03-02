import React from 'react'
import Proptypes from 'prop-types'

function TechItem({ tech,onDelete }){
  return (
    <li key={tech}>
      {tech}
      <button onClick={onDelete}>Remover</button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: Proptypes.string.isRequired,
  onDelete: Proptypes.func.isRequired,
}

export default TechItem