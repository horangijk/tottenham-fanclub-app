import React, { Component } from 'react'

class SignupForm extends Component {
   
    handleSubmit = e => { 
        e.preventDefault();   
        const email = document.forms['Form']['email'].value;
        const password = document.forms['Form']['password'].value;
        const name = document.forms['Form']['user'].value;
        fetch("http://localhost:3001/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                //body: JSON.stringify(this.state)
                
                body: JSON.stringify({
                    "email": email,
                    "name": name,
                    "password": password
                })
                
            })
            .then(result => console.log(result))
            //.then(res => res.json())
            //.then(data => console.log(data))
        // if (email === "" || password === "") {
        //     alert("Email and Password must be filled out");
        //     return false;
        // }  
    }

    // render() {
    //     return (
    //         <div>
    //             <form name='Form' onSubmit={this.handleSubmit} noValidate>
    //             <input
    //                 type="email"
    //                 name="email"
    //                 placeholder="Email"
    //                 required
    //                 onChange={this.handleChange}
    //             />
    //             <br />
    //             <input
    //                 type="text"
    //                 name="password"
    //                 placeholder="Password"
    //                 required
    //             />
    //             <br />
                   
    //             <input type='submit'></input>
    //             </form>
    //         </div>
    //     );
    // }
    render() {
        return (
        <div className='Form'>
        <h1>Signup</h1>
        <form
            name="Form"
            onSubmit={this.handleSubmit}
            noValidate
        >
            <input
                type='user'
                name='user'
                placeholder='User'
                required 
            />
            <br/>
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
            />
            <br />
            <input
                type="text"
                name="password"
                placeholder="Password"
                required
            />
            <br />
            <input type="submit" />
            
        </form>
        </div>)
    }
}

export default SignupForm