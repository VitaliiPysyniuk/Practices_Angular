import {AfterContentChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../services';
import {IUser} from '../../../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, DoCheck {

  authUser: IUser;
  users: IUser[];
  editing = false;
  counter = 0;

  constructor(private router: Router, private dataService: DataService, private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.params);
  }

  ngOnInit(): void {
    this.dataService.getAuthUser().subscribe(value => this.authUser = value);
    this.activatedRoute.data.subscribe(({usersResolveData}) => this.users = usersResolveData);
    console.log(this.users);
  }

  userLogOut(): void {
    this.router.navigate(['auth', 'login']);
  }

  editUser(): void {
    this.router.navigate(['1'], {relativeTo: this.activatedRoute});
    this.editing = !this.editing;
  }

  ngDoCheck(): void {
    console.log('after ' + this.counter);
    this.counter += 1;
  }

}
