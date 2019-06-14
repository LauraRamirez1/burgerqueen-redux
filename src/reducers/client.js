import {clientnew} from '../actions/actionTypes'

export default (
    state = {
        client: ""
    },
    action
 ) => {
     switch(action.type){
         case clientnew : 
         return {
             ...state,
             client: action.payload
         }
         default: return state;
     }
 }