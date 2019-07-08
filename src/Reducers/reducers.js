const initialState = {
    players: [],
    users: {},
    comments: {},
    currentUser: {},
    user: "",
    description: "",
    player_id: 0
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PLAYERS": {
            return {...state, players: action.payload}
        }
        case "LOAD_COMMENTS": {
            return {...state, comments: action.payload}
        }
    
    default:
        return state;
    }
};

export default reducers;    

