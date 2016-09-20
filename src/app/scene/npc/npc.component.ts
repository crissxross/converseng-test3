import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {
  @Output() npcTurn = new EventEmitter(); // a custom EventEmitter ??
  @Input() npcSpeaks;

  constructor() { }

  ngOnInit() {
  }

}
