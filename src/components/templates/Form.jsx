import React from 'react'

export default function Form() {
  return (
    <React.Fragment>
      
      <input className="form-control form-control-sm mb-2" type="text" placeholder="Search by game title" aria-label=".form-control-sm example"/>
      <div className="d-none d-md-flex justify-content-evenly my-3">
        <div className="btn-group align-self-start">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platforms
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/#">Action</a></li>
          <li><a className="dropdown-item" href="/#">Another action</a></li>
          <li><a className="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </div>
        <div className="btn-group align-self-start">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Genres
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/#">Action</a></li>
            <li><a className="dropdown-item" href="/#">Another action</a></li>
            <li><a className="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </div>
        <div className="btn-group align-self-start">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Publishers
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/#">Action</a></li>
            <li><a className="dropdown-item" href="/#">Another action</a></li>
            <li><a className="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </div>
        <div className="">
          Order by:
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
            <label className="form-check-label" for="flexRadioDefault1">
              Rating
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label className="form-check-label" for="flexRadioDefault2">
              Release Date
            </label>
          </div>
        </div>
        
      </div>
    </React.Fragment>
  )
}
