import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { BasicSocialNetworkComponent } from './features/basic-social-network/basic-social-network.component';
import { MultiplayerGameComponent } from './features/multiplayer-game/multiplayer-game.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', children: [
    {path: '', component: HomeComponent},
    {path: 'basic-social-network', component: BasicSocialNetworkComponent},
    {path: 'multiplayer-game', component: MultiplayerGameComponent},
  ]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
