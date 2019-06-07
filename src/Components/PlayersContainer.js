import React, { Component } from 'react'
import PlayersCard from './PlayersCard'
import CommentsCard from './CommentsCard';
// import Reducers from './Reducers/Reducers';

class PlayersContainer extends Component {
    state = {
        players: [],
        filteredRappers: [],
        comments: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/players')
            .then(resp => resp.json())
            .then(allPlayers => this.setState({
                players: allPlayers,
                filteredPlayers: allPlayers
            })
            )
        fetch('http://localhost:3001/api/v1/comments')
            .then(resp => resp.json())
            .then(allComments => this.setState({
                comments: allComments
            })
            )
    }

    render() {
        let players = this.state.players.map(playerObj => (
            <div>
                <PlayersCard
                    player={playerObj}
                />
            </div>
        ));
        
        let comments = this.state.comments.map(commentObj => (
            <div>
            <CommentsCard
              comment={commentObj}
            />
            </div>
        )
          );

        return(
            <div>
            {players}
            {comments}
            </div>
        )
    }
}

export default PlayersContainer;