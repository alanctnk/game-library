import React from 'react'

import PageHeader from '../PageHeader'
import GameCard from './GameCard'
import Content from '../Content'
import Loading from '../loading/Loading'

import { api_key } from '../../../services/axios'
import axiosInstance from '../../../services/axios'

export default function Games() {

    const [isLoading, setIsLoading] = React.useState(true)
    const [gamesList, setGamesList] = React.useState([])

    React.useEffect(() => {
        axiosInstance.get(`/games?${api_key}&metacritic=90,95&ordering=-metacritic`)
          .then((resp) => setGamesList([...resp.data.results]))
          .then(() => setIsLoading(false))
    }, [])

    return (
        <div>
            <PageHeader title="Games" subtitle="Top 20 best games" />
            
            <Content>
              {isLoading ? <Loading/> : (

                  <div className="container">
                    <div className="grid row">

                      {gamesList.map((game) => {
                          return (
                              <GameCard

                              key={game.id}
                              game={game} />
                          )
                      })}
                    </div>
                  </div>
                )
              
              }
                
                
            </Content>
        </div>
    )
}
