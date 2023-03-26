import { types } from '../types/types';

// state = {
//     logged: true
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.start:
            return {
                MAX_AGE: 120,
                user: {
                    ...action.payload.user,
                    logged: true
                },
                planData: action.payload.planData,
            }
        case types.end:
            return {
                user: {
                    logged: false
                },
                planData: []
            }
        default:
            return state;
    }
}