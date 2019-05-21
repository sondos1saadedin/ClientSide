/**
 * Created by sondo on 30/03/2018.
 */

const initialState = {
    login : false,
    userEmail: "sondos@example.com",
    userName: "sondos saadedin",
    user:{}

};


const reducer = (state =  initialState, action) => {
    if(action.type == 'LOGIN_ME'){
        console.log("in LOGIN_ME action");
        console.log(state);

        return {
            ...state,
            login: true,
            userEmail: action.data.email,
            userName: action.data.userName,
        }

    }
    if (action.type == "UPDATE_USER") {
        console.log("in update user action");

        return{
            ...state,
            user: action.user,
        }
    }
    return state;
};


export default reducer;