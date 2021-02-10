import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../sevices";
import {IUser} from "../../../models";
import {DataService} from "../../../services/data.service";
import {browser} from "protractor";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: IUser[] = null;
  user: IUser = null;
  notFound = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usersService: UsersService, private dataService: DataService) {
  }

  login = new FormControl(null, [Validators.required, Validators.maxLength(15)]);
  password = new FormControl(null, [Validators.required, Validators.maxLength(15)]);

  form = new FormGroup({
    login: this.login,
    password: this.password
  });

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => {
      this.users = value;
    });
  }

  navigateToRegister(): void {
    this.router.navigate(['register'], {relativeTo: this.activatedRoute.parent});
  }
  navigateToUsers(): void {
    this.router.navigate(['users']);
  }

  onInput(): void {
    this.notFound = false;
  }

  userLogination(form: FormGroup): void {
    this.user = this.users.find(value => {
      return (value.password === form.getRawValue().password && value.login === form.getRawValue().login);
    });
    if (!!this.user) {
      this.dataService.setAuthUser(this.user);
      this.navigateToUsers();
    } else {
      this.notFound = true;
    }
  }
}
