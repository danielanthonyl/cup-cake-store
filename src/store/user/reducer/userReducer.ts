import {User} from '../../interfaces/interfaces';
import {USER_TYPES} from '../types/userTypes';

export interface UsersReducer {
  Users: User[];
}

const initialState: UsersReducer = {
  Users: [],
};

export const usersReducer = ({
  state = initialState,
  action,
}: {
  state: UsersReducer;
  action: {type: string; payload: any};
}) => {
  switch (action.type) {
    case USER_TYPES.FETCH_USERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
