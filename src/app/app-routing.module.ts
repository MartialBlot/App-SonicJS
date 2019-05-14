import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LevelsComponent } from './levels/levels.component';
import { Level1Component } from './level1/level1.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'levels', component: LevelsComponent},
  {path: 'level1', component: Level1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
