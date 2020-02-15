import {NgModule} from '@angular/core';
import { UserComponent } from './user/user.component';
import { UsersService } from '../rest/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [HttpClientModule, CommonModule, MatCardModule, MatProgressSpinnerModule, RouterModule, MatListModule, MatButtonModule],
  providers: [UsersService],
  bootstrap: []
})

export class UsersModule {}
