import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module'; 
import { DiscoverComponent } from './discover/discover.component';
import { FeedsComponent } from './feeds/feeds.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
   {
     path: '', 
     component: PlayerComponent
   },  
   {
    path: 'tracks', 
    component: TracksComponent
  }, 
  {
    path: 'feeds', 
    component: FeedsComponent
  }, 
  {
    path: 'discover', 
    component: DiscoverComponent
  }, 
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
   }
];

@NgModule({
  declarations: [PlayerComponent,
    TracksComponent,
  FeedsComponent,
DiscoverComponent],
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayerModule { }
