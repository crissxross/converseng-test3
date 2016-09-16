import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SceneModule } from './scene/scene.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { counterReducer } from './core/counter.reducer';

/**
 * NGRX
 * In app's main module, import your reducers and use the
 * StoreModule.provideStore({reducers}, {initialState})
 * function to provide them to Angular's injector.
 */

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CoreModule,
    HomeModule,
    SceneModule,
    StoreModule.provideStore(
      {
        counterReduc: counterReducer
      }
    )
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
