import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-npc',
  // templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css'],
  template: `
    <div class="npc-speaks">
      <p>{{ npcSpeaks | async }}</p>
      <p>npc speaks for TESTing! This is a 'p' in a 'div'.</p>
    </div>
  `
})
export class NpcComponent implements OnInit {
  @Input() npcSpeaks;
  // @Output() npcTurn = new EventEmitter(); // a custom EventEmitter ??

  constructor() { }

  ngOnInit() {
  }

}
