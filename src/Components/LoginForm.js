import React, {Component} from 'react';

class LoginForm extends Component {
    
    handleSubmit = e => { 
        e.preventDefault();
        
    }

    render() {
        return(
            <div className='Form'>
            <h1>Login</h1>
            <form>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email'
                    onChange={this.handleSubmit}>
                </input>
                <br/>
                <input
                    type='text'
                    name='password'
                    placeholder='password'
                    onChange={this.handleSubmit}>
                </input><br/>
                <input type='submit'></input>
            </form>
            </div>
        );
    }
}

export default LoginForm
