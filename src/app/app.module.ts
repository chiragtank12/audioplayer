import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from './theme/theme.module';
import { RouterModule } from '@angular/router'; 
import { AuthModule } from './auth/auth.module'; 
// Hammer JS
import 'hammerjs';
import { GestureConfig } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    ThemeModule,
    AuthModule.forRoot(),
    RouterModule
  ],
  providers: [
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: GestureConfig
		}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
