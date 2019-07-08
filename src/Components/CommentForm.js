import React, {Component} from 'react'
import { connect } from 'react-redux'
import { newComments } from '../Reducers/actions.js'

class CommentForm extends Component {

    
    handleSubmit = (e) => {
        
        console.log(newComments())
        e.preventDefault() 
    }

    render() {
        return (
            <form className='Form' name='commentForm'>
                <h1>Comment Form</h1>
                <input 
                    type='text'
                    name='description'
                    placeholder='description'
                    onChange={this.handleChange}
                />
                <br/>
                <select name="dropdown" onChange={this.handleChange}>
                    <option value={1}>Son Heung Min</option>
                    <option value={2}>Harry Kane</option>
                    <option value={3}>Dele Alli</option>
                </select>
                <br/>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                {/* <input 
                    type='submit'
                    onSubmit={this.handleSubmit}
                /> */}
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newComments: (comment) => dispatch(newComments(comment))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);