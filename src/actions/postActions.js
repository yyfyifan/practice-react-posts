/**
 * 负责所有关于post的action
 * 
 */

let pid = 0;

export const actions = {
    DELETE_POST: 'DELETE_POST',
    ADD_POST: 'ADD_POST',
}

export const createDeletePostAction = (id) => {
    return { type: actions.DELETE_POST, pid: id };
};

export const createAddPostAction = (post) => {
    post.id = ++pid;
    return { type: actions.ADD_POST, post };
}