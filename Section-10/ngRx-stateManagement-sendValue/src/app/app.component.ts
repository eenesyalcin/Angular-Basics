import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserModel } from './user.model';
import { UsersComponent } from "./users/users.component";
import { Store } from '@ngrx/store';
import { addUser } from './users/users.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  user: UserModel = new UserModel();

  constructor(
    // private store: Store<{users: UserModel[]}>
    private store: Store
  ) {}

  add(){
    this.store.dispatch(addUser({user: this.user}))
    this.user = new UserModel();
  }

}
