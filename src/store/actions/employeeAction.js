import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "../type/postType"

export const addEmployee = (employee) => {
    return { type: ADD_EMPLOYEE, employee }
}
export const deleteEmployee = (id) => {
    return { type: DELETE_EMPLOYEE, id }
}