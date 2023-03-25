import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { BasicSocialNetworkComponent } from './components/basic-social-network/basic-social-network.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicSocialNetworkComponent,
    NavbarHomeComponent
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
