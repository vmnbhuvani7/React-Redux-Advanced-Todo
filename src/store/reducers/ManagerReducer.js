import { ADD_POST, DELETE_POST } from "../type/postType";

const initialState = {
    posts: [
        { id: 1, name: "1st post", age: 21, email: "test1@gmail.com", type: "Manager" },
        { id: 2, name: "2nd post", age: 21, email: "test2@gmail.com", type: "Employee" }
    ]
}
// const initialState = {
//     posts: [JSON.parse(localStorage.getItem('testObject'))]
// }
const ManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST:
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost,
            }
        case ADD_POST:
            // initialState.posts = [action.post, ...state.posts]
            // localStorage.setItem('testObject', JSON.stringify(initialState.posts))
            // return initialState.posts
            return {
                posts: [action.post, ...state.posts],
            }
        default:
            return state
    }
};

export default ManagerReducer;