import { types } from '../types/types';

// state = {
//     logged: true
// }

export const authReducer = ( state = {} , action ) => {
    switch(action.type){
        case types.start:
            return {
                ...action.payload,
                logged: true
            }
        case types.end:
            return {
                logged: false
            }
        default:
            return state;
    }
}