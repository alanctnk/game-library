import React from 'react'
import { Link } from 'react-router-dom'

export default function GameCard(props) {
  const { game } = props
    return (
        <div className="card shadow-sm g-col-xs-12 g-col-md-6 g-col-2 me-auto mb-4" style={{width: '18rem'}}>
            <img src={game.background_image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title fw-bold">{game.name}</h5>
            </div>
            <hr />
            <div className="card-body">
              <div className="d-flex justify-content-around">
                <span><i className="fa fa-star text-warning"></i> {game.rating}</span>
                <Link className="btn btn-primary" to={`/games/${game.id}`}>
                  <i className="fa fa-info-circle"></i> Details
                </Link>
              </div>
            </div>
        </div>
    )
}
