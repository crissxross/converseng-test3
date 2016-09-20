/**
 * Following @teropa's' harmonics-explorer (in tuts) this reducer should be:
 * The main (and only) @ngrx/store reducer for the application.
 */
import { ActionReducer, Action } from '@ngrx/store';
// import { Convoturn } from './convoturn.model';
// import { AppState } from './appstate'; // ???
/**
 * NGRX
 * Create a reducer function for each data type you have
 * in your application. The combination of these reducers
 * will make up your application state.
 */
/**
 * Action (defined in ngrx/store dispatcher.ts):
 *  export interface Action {
 *    type: string;
 *    payload?: any;
 *  }
 */

// ACTION definitions
export const START_CONVO = 'START_CONVO';
export const NEXT_TURN = 'NEXT_TURN';
export const NPC_TURN = 'NPC_TURN';
export const PLAYER_TURN = 'PLAYER_TURN';
export const NPC_SPEAKS = 'NPC_SPEAKS';
export const PLAYER_SPEAKS = 'PLAYER_SPEAKS';
export const PLAYER_THINKS = 'PLAYER_THINKS';
export const PLAYER_OPTIONS = 'PLAYER_OPTIONS';
export const SELECT_OPTION = 'SELECT_OPTION';

// ACTION definitions that might be more useful than some of the ones above (SEE diagram in ConversEngine-StiU.scap):
export const FIRST_ROUND = 'FIRST_ROUND';
export const NEXT_ROUND = 'NEXT_ROUND';
export const LAST_ROUND = 'LAST_ROUND';

// TODO: I need to add an AppState model for my ActionReducer ?
// TODO: I could pass in an initState function to convoReducer ?

// The REDUCER function receives actions and produces new application states.
export const convoReducer: ActionReducer<any> = (state = [], action: Action) => {
  switch (action.type) {

    case START_CONVO:
      // NOTE - these CAN RETURN FUNCTIONS
      return state;

    case NEXT_TURN:
      // NOTE - these stubs are the updates I need to implement
      return state;

    case NPC_TURN:
      return state;

    case PLAYER_TURN:
      return state;

    case NPC_SPEAKS:
      return state;

    case PLAYER_SPEAKS:
      return state;

    case PLAYER_THINKS:
      return state;

    case PLAYER_OPTIONS:
      return state;

    case SELECT_OPTION:
      return state;

    default:
      return state;
  }
};
