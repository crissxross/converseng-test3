import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SceneComponent } from './scene/scene.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { PlayerComponent } from './scene/player/player.component';
import { NpcComponent } from './scene/npc/npc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SceneComponent,
    DashboardComponent,
    NavComponent,
    PlayerComponent,
    NpcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
