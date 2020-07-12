import postReducer from './postReducer';

const initialState = {
    // 每个post对象包含id, title, body三个属性
    posts: []
}

// rootReducer负责整合所有子reducer
// 判断action的type，然后交给合适的reducer来处理
const rootReducer = (state = initialState, action) => {
    if (action.type.includes("POST")) {
        return {
            ...state,
            posts: postReducer(state.posts, action)
        };
    }
    
    return state;
}

export default rootReducer;