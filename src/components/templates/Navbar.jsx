import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

export default function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/games" className="navbar-brand">
                    
                    <img src={logo} alt="epicGames" height="50"/> Epic Games
                    
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/games" className="nav-link" aria-current="page">
                        Games
                    </Link>
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                    
                </div>
                </div>
            </div>
        </nav>
    )
}
