import { ADD_POST, DELETE_POST } from "../type/postType";

const initialState = {
    employees: [
        { id: 1, name: "1st employee post", age: 21,email:"test1@gmail.com",type:"Manager" },
        { id: 2, name: "2nd employee post", age: 21,email:"test2@gmail.com",type:"Employee" }
    ]
}
const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST:
            const newPost = state.employees.filter(post => post.id !== action.id)
            return {
                employees: newPost,
            }
        case ADD_POST:
            return {
                employees: [action.post, ...state.employees],
            }
        default:
            return state
    }
};

export default EmployeeReducer;