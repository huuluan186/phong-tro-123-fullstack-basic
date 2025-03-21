import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn:false,
    token:null
}

const authReducer = (state=initState,actions)=>{
    switch(actions.type){
        case actionTypes.REGISTER_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                token: actions.data
            }
        case actionTypes.REGISTER_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: actions.data,
                token:null
            }
        default:
            return state;
    }
}

export default authReducer;