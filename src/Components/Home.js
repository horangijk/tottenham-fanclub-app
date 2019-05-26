import React, { Component } from 'react';
import PlayersContainer from './PlayersContainer';
import CommentsContainer from './CommentsContainer'

class Home extends Component {
    render(){
        return(
            <div className='Form'> 
            <h1>Home</h1>
            <PlayersContainer />
            <CommentsContainer />
            </div>
        )
    }
}

export default Home;