import {NgModule} from '@angular/core';
import { UserComponent } from './user/user.component';
import { UsersService } from '../rest/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { UserTemplateDrivenFormComponent } from './user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorsComponent } from '../shared/errors/errors.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserTemplateDrivenFormComponent,
    UserReactiveFormComponent,
    ErrorsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})

export class UsersModule {}
