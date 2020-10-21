import { Action, createReducer, on } from '@ngrx/store';
import { User } from './user.model';
import { setCurrentUser, actionAddCollaborator, resetCurrentUser } from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  current_user: User;
  collaborators: Array<User>;
  otherUsers: Array<User>;
}

export const initialState: UserState = {
  current_user: null,
  collaborators: [],
  otherUsers: [
    {
      email: 'kamilia@dallmayer.de',
      id: '1',
      name: 'Kamilia',
      surname: 'Mullakaeva'
    },
    {
      email: 'hussain@dallmayer.de',
      id: '2',
      name: 'Hussain',
      surname: 'Jundi'
    },
    {
      email: 'christos@dallmayer.de',
      id: '3',
      name: 'Christos',
      surname: 'Ziakas'
    }
  ]
};

const reduer = createReducer(
  initialState,
  on(setCurrentUser, (state, action) => ({
    ...state,
    current_user: action.user
  })),
  on(actionAddCollaborator, (state, action) => {
    const new_state = { ...state };
    if (
      new_state.collaborators.findIndex(item => item.id === action.user.id) ===
      -1
    )
      new_state.collaborators.push(action.user);
    return new_state;
  }),
  on(resetCurrentUser, (state, _) => ({
    ...state,
    current_user: null
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reduer(state, action);
}
