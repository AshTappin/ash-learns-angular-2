import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
      path : '',
      redirectTo: ' /dashboard',
      pathMatch: 'full'
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
