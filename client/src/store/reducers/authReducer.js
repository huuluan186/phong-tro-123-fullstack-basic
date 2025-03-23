import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn:false,
    token:null
}

const authReducer = (state=initState,actions)=>{
    switch(actions.type){
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS: // Dùng chung return
            return{
                ...state,
                isLoggedIn: true,
                msg: '',
                token: actions.data,
            }

        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: actions.data,
                token:null
            }

        case actionTypes.LOGOUT:
            return{
                ...state,
                isLoggedIn:false,
                msg:'',
                token:null
            }
            
        default:
            return state;
    }
}

export default authReducer;