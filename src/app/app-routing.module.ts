import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
// import { PlayerComponent } from './pages/player/player.component'; 
import { BaseComponent } from './theme/base/base.component';

const routes: Routes = [
  //  { path: '', component: PlayerComponent }, 
  {
    path:'auth', 
    loadChildren:() => import('./auth/auth.module').then(m=>m.AuthModule) 
  },
  
    {
      path: '',
      component: BaseComponent, 
      canActivate: [AuthGuard],
      children: [
        {
          path: '', 
          redirectTo:'player',
          pathMatch: 'full'
        },	
        {
          path: 'player', 
          loadChildren: () => import('./pages/player.module').then(m => m.PlayerModule),
        },			
      ]
    },
    
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}