import React from 'react'
import Content from '../templates/Content'

import Navbar from '../templates/Navbar'
import PageHeader from '../templates/PageHeader'

export default function about() {
    return (
        <div>
          <Navbar/>
          <PageHeader title="About" subtitle="About me" />
          <Content>
            <div className="container">

              <header className="h3">Hello, I'm Alan Tanaka</header>
              <p className="fs-5"> I'm a tech lover and aspiring Web Developer! I like content focused on logical reasoning, I realized that programming represents this idea, so I always intend to improve myself to elucidate problems and help people. I am currently studying Full Stack Web Development at Trybe. My favorite languages ​​are JavaScript and Python.                
              </p>
            </div>
            <div className="container">
              <header className="h5 text-muted">Follow:</header>
              <ul>
                <li>
                  <a href="https://github.com/alanctnk" className="link-primary">
                      <i className="fa fa-github text-dark me-2"></i>
                      <span className="fw-bolder">
                          Github
                      </span>
                  </a>

                </li>
                <li>
                  <a href="https://www.linkedin.com/in/alan8819/" className="link-primary">
                      <i className="fa fa-linkedin text-info me-2"></i>
                      <span className="fw-bolder">
                          LinkedIn
                      </span>
                  </a>
                </li>
              </ul>
            </div>
          </Content>
        </div>
    )
}
