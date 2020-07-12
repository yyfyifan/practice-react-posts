import { actions } from '../actions/postActions';


// 专门处理posts相关的reducer
const postReducer = (posts, action) => {
    switch (action.type) {
        case actions.DELETE_POST:
            const newPosts = posts.filter((post) => post.id !== action.pid);
            return newPosts;
        case actions.ADD_POST:
            return [...posts, action.post];
        default:
            return posts;
    }
};

export default postReducer;