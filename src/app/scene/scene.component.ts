import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Store is injected into our components to gain access to our application State and to dispatch actions
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  START_CONVO,
  NEXT_TURN,
  NPC_TURN,
  PLAYER_TURN,
  NPC_SPEAKS,
  PLAYER_SPEAKS,
  PLAYER_THINKS,
  PLAYER_OPTIONS,
  SELECT_OPTION
} from '../core/convo.reducer';

/**
 * Smart components
 * generally have direct access to store or a derivative.
 * Smart components handle view events and the dispatching of actions,
 * whether through a service or directly. Smart components also handle
 * the logic behind events emitted up from child components within the
 * same view. (quote btroncone)
 */
/**
 * Re. the only "smart component" in harmonics-explorer:
 * We only subscribe to @ngrx/store here, and also only dispatch
 * actions to @ngrx/store here. Other components are stateless
 * and know nothing about the store. (quote teropa)
 */

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  scdata;
  convo$;

  // TODO: I need to add an AppState model for my type of Store<> !?

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Do I need Router here? What for?
    private store: Store<any>
  ) {
    this.convo$ = store.select('convo');
   }

   // scdata stores all of the scene data resolved by the router.
  ngOnInit() {
    this.scdata = this.route.data;
  }

  // SHOULD I BE USING EFFECTS ?????

  // All state-changing ACTIONS get dispatched to & handled by REDUCERS:

  startConvo() {
    this.store.dispatch({ type: START_CONVO,
      // payload: ?
    });
  }

  nextTurn() {
    this.store.dispatch({ type: NEXT_TURN,
      // payload: ?
    });
  }

  npcTurn() {
    this.store.dispatch({ type: NPC_TURN,
      // payload: ?
    });
  }

  playerTurn() {
    this.store.dispatch({ type: PLAYER_TURN,
      // payload: ?
    });
  }

  npcSpeaks() {
    this.store.dispatch({ type: NPC_SPEAKS,
      // payload: ?
    });
  }

  playerSpeaks() {
    this.store.dispatch({ type: PLAYER_SPEAKS,
      // payload: ?
    });
  }

  playerThinks() {
    this.store.dispatch({ type: PLAYER_THINKS,
      // payload: ?
    });
  }

  playerOptions() {
    this.store.dispatch({ type: PLAYER_OPTIONS,
      // payload: ?
    });
  }

  selectOption(option) {
    this.store.dispatch({ type: SELECT_OPTION,
      payload: option
    });
  }

  // BUT DO I NEED TO USE @ngrx/effects TO GET THE CONVO SCENE DATA?
}
