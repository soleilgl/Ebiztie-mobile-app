
import { USERNAME_INPUT } from '../actions'

const initialState = '';
export default function username(state = initialState, action) {
  switch (action.type) {
    case USERNAME_INPUT:
      return action.username;
    default:
      return state
  }
}
