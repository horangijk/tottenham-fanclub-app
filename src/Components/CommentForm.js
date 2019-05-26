import React, {Component} from 'react'

class CommentForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return(
            <div>
                <h3>Comment Form</h3>
                <input 
                    type='text'
                    name='description'
                    placeholder='description'
                />
                <br/>
                <select>
                    <option value="Son Heung Min">Son Heung Min</option>
                    <option value="Harry Kane">Harry Kane</option>
                    <option value="Dele Alli">Dele Alli</option>
                </select>
                <br/>
                <input 
                    type='submit'
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default CommentForm;