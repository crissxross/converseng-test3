import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Store is injected into our components to gain access to our application State and to dispatch actions
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  scdata;

  constructor(
    private route: ActivatedRoute,
    // private router: Router
  ) { } // Do I need the Router here? If yes, what for?

  /**
   * scdata stores all of the scene data resolved by the router.
   */
  ngOnInit() {
    this.scdata = this.route.data;
  }

}
