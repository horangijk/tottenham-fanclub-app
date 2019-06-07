import React, { Component } from 'react'
import CommentsCard from './CommentsCard'

class CommentsContainer extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        // fetch('http://localhost:3001/api/v1/comments')
        //     .then(resp => resp.json())
        //     .then(allComments => this.setState({
        //         comments: allComments
        //     })
        //     )
    }

    render() {
        // let comments = this.state.comments.map(commentObj => (
        //     <CommentsCard
        //       comment={commentObj}
        //     />
        // )
        //   );
        return(<div>
            {/* {comments} */}
            </div>)
    }
}

export default CommentsContainer;
