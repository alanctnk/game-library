import React from 'react'
import './Loading.css'

export default function loading() {
    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <span className="fs-2 text-secondary">Loading</span>
            <div className="lds-dual-ring"></div>
        </div>
    )
}
