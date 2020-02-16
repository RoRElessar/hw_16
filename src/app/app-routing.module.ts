import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserTemplateDrivenFormComponent } from './users/user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './users/user-reactive-form/user-reactive-form.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'create-user-with-template-driven-form', component: UserTemplateDrivenFormComponent },
  { path: 'create-user-with-reactive-form', component: UserReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
