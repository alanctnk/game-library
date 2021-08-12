import React from 'react'

import Navbar from '../Navbar'
import PageHeader from '../PageHeader'
import Loading from '../loading/Loading'

import { api_key } from '../../../services/axios'
import axiosInstance from '../../../services/axios'
import Content from '../Content'

export default function GameDetails(props) {
    const { match: { params: { id } } } = props
    const [isLoading, setIsLoading] = React.useState(true)
    const [game, setGame] = React.useState(null)

    React.useEffect(() => {
        axiosInstance.get(`/games/${id}?${api_key}`)
            .then((resp) => setGame(resp.data))
            .then(() => setIsLoading(false))
    }, [])

    return (
        
        <div>
            <Navbar/>
            <PageHeader title="Games" subtitle="Game details"/>
            <Content>
                {isLoading ? <Loading/> : (
                  <div className="container">
                    <header className="h4 d-flex justify-content-center fw-bold bg-light rounded-pill p-1">
                      {game.name}
                    </header>
                    <section className="details">
                      <div className="container d-flex">
                        <div className="container">
                          <header className="fs-4 text-muted">Rating: <span className="text-dark">{game.rating}</span></header>
                        </div>
                        <div className="container">
                          <header className="fs-4 text-muted">Release Date: <span className="text-dark">{game.released}</span></header>
                        </div>
                      </div>
                      <div className="container border">
                        <div className="imagesGroup m-2">

                          <a href={game.background_image} target="_blank">
                            <img src={game.background_image} className="img-thumbnail" alt="..."/>
                          </a>
                          <a href={game.background_image_additional} target="_blank" >
                            <img src={game.background_image_additional} className="img-thumbnail" alt={`${game.name_original}`}/>

                          </a>
                        </div>
                      </div>
                      <div className="container mt-2 border">
                        <header className="fs-4 text-muted">Genres</header>
                        <div className="list-group list-group-horizontal my-2">
                          {game.genres.map((genre) => {
                            return (
                              <a key={genre.id} href="#" className="list-group-item list-group-item-action list-group-item-info fw-bolder">{genre.name}</a>
                            )
                          })}
                        </div>
                      </div>
                      <div className="container mt-2 border">
                        <header className="fs-4 text-muted">Consoles</header>
                        <div className="list-group list-group-horizontal overflow-hidden my-2">

                          {game.platforms.map(({platform}) => {
                            return (
                              
                              <a key={platform.id} href="#" className="list-group-item list-group-item-action list-group-item-info fw-bolder">{platform.name}</a>
                            )
                          })}
                        </div>
                      </div>
                      <div className="container mt-2 mb-4 border">
                        <header className="fs-4 text-muted">Developers</header>
                        <div className="list-group list-group-horizontal overflow-hidden my-2">

                          {game.developers.map((dev) => {
                            return (
                              
                              <a key={dev.id} href="#" className="list-group-item list-group-item-action list-group-item-info fw-bolder">{dev.name}</a>
                            )
                          })}
                        </div>
                      </div>
                      
                    </section>
                                        
                  </div>
                )}
            </Content>
        </div>
    )
}
