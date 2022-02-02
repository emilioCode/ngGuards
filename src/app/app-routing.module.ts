import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', 
    loadChildren: ()=> import('./components/dashboard/dashboard-routing.module').then( x => x.DashboardRoutingModule ), 
    pathMatch: 'full'  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
