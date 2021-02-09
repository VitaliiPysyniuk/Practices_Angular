import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../models";
import {DataService} from "../../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: IUser;
  accessFlag = true;
  authUser: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAuthUser().subscribe(value => this.authUser = value);
    if (this.authUser.id === this.user.id || this.authUser.status === 'admin') {
      this.accessFlag = false;
    }
  }

  saveChanges(): void {
    window.history.back();
  }

}
