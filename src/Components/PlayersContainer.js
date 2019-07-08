import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayersCard from './PlayersCard'
import CommentsCard from './CommentsCard';
import { getPlayers } from '../Reducers/actions.js'
import { store } from '../index'
// import {getState} from 'redux'
// import Reducers from './Reducers/Reducers';

class PlayersContainer extends Component {
    // state = {
    //     players: [],
    //     comments: []
    // }

    // componentDidMount() {
     
    //     fetch('http://localhost:3001/api/v1/players')
    //         .then(resp => resp.json())
    //         .then(allPlayers => this.setState({
    //             players: allPlayers,
    //             filteredPlayers: allPlayers
    //         })
    //         )
    //     fetch('http://localhost:3001/api/v1/comments')
    //         .then(resp => resp.json())
    //         .then(allComments => this.setState({
    //             comments: allComments
    //         })
    //         )
    //         console.log(this.state.players)
    // }
    
    render() {
        // process comments first. in this way:
        // newComments = [ [all_comments for player Id 1] ,  [all_comments for player Id 2]  , [all_comments for player Id 3]  ]
        // newComments either has processed (rendered) HTML for comments
        // or unprocessed comment json object, to be used with PlayerCommentCard

        
        //TODO: if the comment belongs to some_id
        // newComments[commentObj.player_id].append(comment)
        //  commentsSorted[player_id]  .... append
        let commentsSorted = {1: [], 2: [], 3: []}

        // step 1: sort comments for each player. keep as JSON
        store.getState().comments.forEach(comment => {
            /*
            if(comment.player_id === 1) {
                commentsSorted[1].push(comment)
            }
            if(comment.player_id === 2) {
                commentsSorted[2].push(comment)
            }
            if(comment.player_id === 3) {
                commentsSorted[3].push(comment)
            }
            */
           commentsSorted[comment.player_id].push(comment)
        }
        )

        // console.log(commentsSorted)
        // console.log(Object.keys(commentsSorted)[0])

        let commentsConverted = {1: [], 2: [], 3: []}
        // step 2: now process each comment JSON using CommentsCard
        Object.keys(commentsConverted).forEach(key => 
        commentsConverted[key] = commentsSorted[key].map(commentObj => (
            <div className='each-comment'>
            <CommentsCard
              comment={commentObj}
            />
            
            </div>
        )))

        //console.log(this.state.players)
        let players = this.state.players.map(playerObj => (
            <div className='each-player'>
                <PlayersCard
                    player={playerObj}
                />
                {commentsConverted[playerObj.id]}
            </div>
            
        ));
        //console.log(players)
        //  {comm[playerObj.id]}
        return(
            <div>
            {players}
            </div>
        )

        /*
            let playercomment = .....map(playerandcommentobj => (
                <div>
                   <PlayerCommentCard
                       player = {playerandcommentobj.player},
                       comment = {playerandcommentobj.comment}
                   />
                </div>
            ))

        */
    }
}
console.log(store.getState().comments)
const mapStateToProps = (state) => {
    // console.log(getState())
    return {
        comments: state.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newComments: (player) => dispatch(getPlayers(player))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer);