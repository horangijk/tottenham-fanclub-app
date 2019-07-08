//-------------------Players

export const loadPlayers = (players) => ({
    type: "LOAD_PLAYERS",
    payload: players
})

export const getPlayers = () => dispatch => {
    return fetch('http://localhost:3001/api/v1/players')
        .then(resp => resp.json())
        .then(allPlayers => this.setState({
            players: allPlayers
        })
)};

//--------------------Comments

export const loadComments = (comments) => ({
    type: "LOAD_COMMENTS",
    payload: comments
})

export const getComments = () => dispatch => {
    return fetch('http://localhost:3001/api/v1/comments')
        .then(resp => resp.json())
        .then(allComments => this.setState({
            comments: allComments
        })
    )
}


export function newComments(commentObj) {
  console.log(commentObj)
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //body: JSON.stringify(this.state)
            
            body: JSON.stringify({
                "description": this.state.description,
                "user": this.state.user,
                "player_id": this.state.player_id
            })
            
        })
        //.then(result => console.log(result))
        .then(res => res.json())
        .then(data => console.log(data))
    }
}

//_____________________________ Users

const signInUser = (user) => ({
    type: "SIGN_IN_USER",
    payload: user
  })

export function getCurrentUser(userObj) {
    return (dispatch) => {
      // let token = localStorage.token
      return fetch('http://localhost:3001/api/v1/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
        },
        body: JSON.stringify({user: userObj})
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.jwt);
        dispatch(signInUser(data.user));
  
      })
    }
}

const addUser = (user) => ({
    type: "ADD_USER",
    payload: user
})

export function createUser(userObj) {

    return (dispatch) => {
      return fetch('http://localhost:3001/api/v1/users',{
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({user: userObj})
      })
        .then(res => res.json())
        .then(user => {
          localStorage.setItem("token", user.jwt);
          dispatch(addUser(user));
          dispatch(signInUser(user.user));
        })
}}

const removeLoggedInUser = () => ({
    type: "LOG_OUT_USER",
    payload: {}
})
  
export function logOutUser() {
    return (dispatch) => {
      dispatch(removeLoggedInUser())
    }
}

export const getUsers = () => dispatch => {
    return fetch('http://localhost:3001/api/v1/users')
      .then(res => res.json())
      .then(data => dispatch(data))
}