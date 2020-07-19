import { types } from "../types/types";
import { act } from "react-dom/test-utils";

// const state = {
//     name: 'Alexis',
//     logged: true
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN:
            console.log('HERE!')
            return {
                ...action.payload,
                logged: true
            }
        case types.LOGOUT:
            return {
                logged: false
            }
    
        default:
            return state
    }
}
