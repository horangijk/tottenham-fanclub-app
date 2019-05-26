import React, { Component } from 'react'
import PlayersCard from './PlayersCard'
// import Reducers from './Reducers/Reducers';

class PlayersContainer extends Component {
    state = {
        players: [],
        filteredRappers: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/players')
            .then(resp => resp.json())
            .then(allPlayers => this.setState({
                players: allPlayers,
                filteredPlayers: allPlayers
            })
            )
    }

    render() {
        let players = this.state.players.map(playerObj => (
            <PlayersCard
              player={playerObj}
            />
        ));
           
        return(
            <div>
            {players}
            
            </div>
        )
    }
}

export default PlayersContainer;