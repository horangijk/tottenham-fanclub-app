import React, { Component } from 'react'

class CommentsCard extends Component {
    render(){
        return(
            <div className='comments-container'>
                <p className='comment'>{this.props.comment.description}</p>
            </div>
        )
    }
}

export default CommentsCard;