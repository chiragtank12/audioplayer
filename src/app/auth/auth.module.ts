import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { StorageService } from '../shared/service/storage.service';

const routes: Routes = [ 
  {
    path: '',
    component: AuthComponent,
    children:[ 
                 {
                   path:'',
                   redirectTo:'login',
                   pathMatch:'full'
                 },
                 {
                   path:'login',
                   component:LoginComponent
                 }
            ]
  }
];


@NgModule({
  declarations: [
    AuthHeaderComponent,
    LoginComponent, 
    AuthComponent,
    HomeComponent
  ], 
  imports: [ 
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule ,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { 
  static forRoot(): ModuleWithProviders {
		return {
			ngModule: AuthModule,
			providers: [ 
				AuthGuard,
			]
		};
	}
}
