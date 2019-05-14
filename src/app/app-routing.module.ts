import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LevelsComponent } from './levels/levels.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'levels', component: LevelsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
