import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './features/home/home.component';
import { NavbarHomeComponent } from './features/navbar-home/navbar-home.component';
import { MultiplayerGameComponent } from './features/multiplayer-game/multiplayer-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarHomeComponent,
    MultiplayerGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
