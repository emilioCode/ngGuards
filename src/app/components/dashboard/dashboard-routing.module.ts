import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from '../about/about.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent, canActivate: [
      AuthGuard
    ] }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule // to enable the double binding with the '[ngModel]' attribute
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    DashboardComponent,
    AboutComponent,
  ]
})
export class DashboardRoutingModule { }
