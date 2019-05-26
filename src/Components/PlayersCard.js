import React, { Component } from 'react'

class PlayersCard extends Component {
    state = {
        clicked: true
    }

    flipClickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
          <div>
            {this.state.clicked ? (
                <div>
                    <h3>{this.props.player.name}</h3>
                    <img className= 'image' alt="" src={this.props.player.img}/>
                </div>
            ) : (
                <div>
                    <h3>{this.props.player.name}</h3>
                    <p>Goals: {this.props.player.goals}</p>
                    <p>Assists: {this.props.player.assists}</p>
                </div>
                )
            }
                
              
              {/* <p>Total shots: {this.props.players.total_shots}</p>) */}
            <button onClick={this.flipClickHandler}>Flip Card</button>
          </div>
        )}
    
}

export default PlayersCard;