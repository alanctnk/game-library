import React from 'react'
import '../custom.css'

export default function pageHeader(props) {
    return (
        <header className="shadow px-3 pageHeader">
            <h2>
                {props.title} {'>'} <span className="fs-4 text-muted">{props.subtitle}</span>
                </h2>
            <hr />
        </header>
    )
}
