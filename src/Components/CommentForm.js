import React, {Component} from 'react'

class CommentForm extends Component {
    state = {
        user: "",
        description: "",
        player_id: null
    }

    handleChange = (e) => {
        this.setState({description: document.forms["commentForm"]["description"].value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3001/api/v1/comments", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify()
            })
            .then(res => res.json())
            .then(data => console.log(data))
                    
    }

    render() {
        return(
            <form name='commentForm'>
                <h3>Comment Form</h3>
                <input 
                    type='text'
                    name='description'
                    placeholder='description'
                    onChange={this.handleChange}
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
                    onClick={this.handleSubmit}
                />
            </form>
        )
    }
}

export default CommentForm;