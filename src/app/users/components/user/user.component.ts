import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../../models';
import {DataService} from '../../../services';
import {UsersService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: IUser;
  @Output() upEdit = new EventEmitter<boolean>();
  @Output() upDeleted = new EventEmitter<boolean>();
  accessFlag = true;
  admin = true;
  authUser: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.dataService.getAuthUser().subscribe(value => this.authUser = value);
    if (this.authUser.id === this.user.id || this.authUser.status === 'admin') {
      if (this.authUser.status === 'admin') {
        this.admin = false;
      }
      this.accessFlag = false;
    }
  }

  editUser(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
      .then(value => this.upEdit.emit(true));
  }

  // todo це норм так робити???
  deleteUser(): void {
    this.usersService.deleteUser(this.user.id).subscribe(value => this.upDeleted.emit());
  }
}
