import React from 'react'
import { Link } from 'react-router-dom'

const ObraLeilao = props => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">{props.titulo}</h4>
      <Link to={`/detalhes/${props.id}`} className="btn btn-danger btn-block">Ver Detalhes</Link>
    </div>
  </div>
)

export default ObraLeilao