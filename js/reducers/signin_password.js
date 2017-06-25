import { PASSWORD_INPUT } from '../actions'

const initialState = '';
export default function password(state = initialState, action ){
  switch (action.type) {
    case PASSWORD_INPUT:
      return action.password;
    default: return state;
  }
}
