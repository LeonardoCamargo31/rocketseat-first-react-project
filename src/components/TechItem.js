import React from 'react'
import Proptypes from 'prop-types'

import { Button } from 'reactstrap';

function TechItem({ tech, onDelete }){
  return (
    <tr key={tech}>
      <td>{tech}</td>
      <td><Button color="danger" outline onClick={onDelete}>Remover</Button></td>
    </tr>
  )
}

TechItem.defaultProps = {
  tech: Proptypes.string.isRequired,
  onDelete: Proptypes.func.isRequired,
}

export default TechItem