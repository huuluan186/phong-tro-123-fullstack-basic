import postcss from "postcss";
import actionTypes from "../actions/actionTypes";

const initState={
    posts:[],
    msg:'',
    count: 0
}

const postReducer=(state=initState,actions)=>{
    switch (actions.type) {
        case actionTypes.GET_POSTS:
        case actionTypes.GET_POSTS_LIMIT:
            return{
                ...state,
                posts: actions.posts || [],
                msg:actions.msg || '',
                count: actions.count || '',
            }
        default:
            return state;
    }
}

export default postReducer