import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Store is injected into our components to gain access to our application State and to dispatch actions
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  FIRST_ROUND,
  NEXT_ROUND,
  NEXT_TURN,
  NPC_SPEAKS,
  PLAYER_SPEAKS,
  PLAYER_THINKS,
  PLAYER_OPTIONS,
  CHOOSE_OPTION
} from '../core/convo.reducer';
// Do I need to import convoReducer or is it available here via StoreModule.provideStore(...) ???

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
  // templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
  template: `
    <app-npc
      [npcSpeaks]="npcSpeaks"
    >
    </app-npc>
    <app-player
      [playerSpeaks]="playerSpeaks"
      [playerThinks]="playerThinks"
      [playerOptions]="playerOptions"
    >
      <!-- (selectOption)="selectOption(option)" -->
    </app-player>

    <!-- extra is only for testing -->
    <div class="extra">
    <small>Scene {{ (scdata | async).sc.meta.id }} description:
      {{ (scdata | async).sc.meta.description }}
      Actors: {{ (scdata | async).sc.meta.actors }}
      <pre>{{ scdata | async | json }}</pre>
      </small>
    </div>
  `
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
    this.convo$ = store.select('convoReduc');
   }

   // scdata stores all of the scene data resolved by the router.
  ngOnInit() {
    this.scdata = this.route.data;
  }

  // Should I be using EFFECTS ?????

  // All state-changing ACTIONS get dispatched to & handled by REDUCERS:
  firstRound() {
    this.store.dispatch({ type: FIRST_ROUND,
      // payload: ?
    });
  }

  nextRound() {
    this.store.dispatch({ type: NEXT_ROUND,
      // payload: ?
    });
  }

  nextTurn() {
    this.store.dispatch({ type: NEXT_TURN,
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

  chooseOption(option) {
    this.store.dispatch({ type: CHOOSE_OPTION,
      // payload: option
    });
  }

  // BUT DO I NEED TO USE @ngrx/effects TO GET THE CONVO SCENE DATA?
}
