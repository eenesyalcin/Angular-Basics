import { Component } from '@angular/core';
import { UserModel } from '../user.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users: UserModel[] = [];

  constructor(
    private store: Store<{users: UserModel[]}>
  ) {
    this.store.select("users").subscribe(res => {
      this.users = res;
    })
  }

}
