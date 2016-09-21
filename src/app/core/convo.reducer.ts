/**
 * Following @teropa's harmonics-explorer (tuts) this reducer should be:
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

// ACTION definitions
export const FIRST_ROUND = 'FIRST_ROUND';
export const NEXT_ROUND = 'NEXT_ROUND';
export const NEXT_TURN = 'NEXT_TURN';
export const NPC_SPEAKS = 'NPC_SPEAKS';
export const PLAYER_SPEAKS = 'PLAYER_SPEAKS';
export const PLAYER_THINKS = 'PLAYER_THINKS';
export const PLAYER_OPTIONS = 'PLAYER_OPTIONS'; // CONSIDER_OPTIONS ?
export const CHOOSE_OPTION = 'CHOOSE_OPTION';
export const LAST_ROUND = 'LAST_ROUND'; // do I need this?
// See myTASKS.todo for discarded ACTION definitions

// TODO: I need to add an AppState model for my ActionReducer ?

// The REDUCER function receives actions and produces new application states.
export const convoReducer: ActionReducer<any> = (state = [], action: Action) => {
  switch (action.type) {
    // NOTE - these stubs are the updates I need to implement
    case FIRST_ROUND:
      return state;

    case NEXT_ROUND:
      return state;

    case NEXT_TURN:
      return state;

    case NPC_SPEAKS:
      return state;

    case PLAYER_SPEAKS:
      return state;

    case PLAYER_THINKS:
      return state;

    case PLAYER_OPTIONS:
      return state;

    case CHOOSE_OPTION:
      return state;

    default:
      return state;
  } // NOTE - these CAN RETURN FUNCTIONS
};
// TODO: I could pass in an initState function to convoReducer ?
