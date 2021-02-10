import {AfterContentChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../services';
import {IUser} from '../../../models';
import {UsersService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  authUser: IUser;
  users: IUser[];
  editing = false;
  counter = 0;

  constructor(private router: Router, private dataService: DataService, private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    activatedRoute.data.subscribe(({usersDataResolve}) => this.users = usersDataResolve);
  }

  ngOnInit(): void {
    this.dataService.getAuthUser().subscribe(authUser => this.authUser = authUser);
    this.dataService.getUpdatedUser().subscribe(updatedUser => {
      this.editing = false;
      this.usersService.getUsers().subscribe(users => this.users = users);
    });
  }

  userLogOut(): void {
    this.router.navigate(['auth', 'login']);
  }

  changeEditing(editing: boolean): void {
    this.editing = editing;
  }

  userDeleted(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }



}
