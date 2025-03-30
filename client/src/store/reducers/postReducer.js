import actionTypes from "../actions/actionTypes";

const initState={
    post:[],
    msg:''
}

const postReducer=(state=initState,actions)=>{
    switch (actions.type) {
        case actionTypes.GET_POSTS:
            return{
                ...state,
                posts: actions.posts || [],
                msg:actions.msg || ''
            }
            
    
        default:
            return state;
    }
}

export default postReducer