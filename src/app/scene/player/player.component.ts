import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Output() playerTurn = new EventEmitter(); // a custom EventEmitter ??
  @Input() playerSpeaks;
  @Input() playerThinks;
  @Input() playerOptions;
  @Output() selectOption = new EventEmitter(); // need to pass in the option selected

  constructor() { }

  ngOnInit() {
  }

}
