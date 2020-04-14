import { LobbyModule } from './lobby/lobby.module';
import { MenuModule } from './menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LobbySearchModule } from './lobby-search/lobby-search.module';
import { LobbySearchComponent } from './lobby-search/lobby-search.component';
import { LobbyComponent } from './lobby/lobby.component';
import { MapPoolComponent } from './map-pool/map-pool.component';


@NgModule({
  declarations: [
    AppComponent,
    MapPoolComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MenuModule,
    LobbySearchModule,
    LobbyModule,
    RouterModule.forRoot([
      { path: '', component: LobbySearchComponent },
      { path: ':error', component: LobbySearchComponent },
      { path: 'lobby/:match_id', component: LobbyComponent },
      { path: 'map/map-pool', component: MapPoolComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
