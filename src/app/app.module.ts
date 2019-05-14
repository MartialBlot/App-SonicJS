import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LevelsComponent } from './levels/levels.component';
import { Level1Component } from './level1/level1.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LevelsComponent,
    Level1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
