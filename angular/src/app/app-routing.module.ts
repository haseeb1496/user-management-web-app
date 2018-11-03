import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {ViewUsersComponent} from './view-users/view-users.component';
import {AddUserFormComponent} from './add-user-form/add-user-form.component';
import {ChartPageComponent} from './chart-page/chart-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: HomePageComponent,
    children: [
      { path: 'view', component: ViewUsersComponent},
      { path: 'create', component: AddUserFormComponent },
      { path: 'charts', component: ChartPageComponent}
    ]
  },
  {path: 'home/view/edit/:id', component: UserEditComponent},
  {path: '**', redirectTo: 'home/create'}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
