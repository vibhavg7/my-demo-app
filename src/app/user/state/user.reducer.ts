import { User } from '../user';

export interface UserState
{
    maskUserName:boolean;
    currentUser: User;
}

export function reducer(state, action) {

    console.log(state);
    switch (action.type) {
  
      case 'MASK_USER_NAME':
        return {
          ...state,
          maskUserName: action.payload
        };
  
      default:
        return state;
    }
  }