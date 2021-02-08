import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../sevices";
import {DataService} from "../../../services/data.service";
import {IUser} from "../../../models";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usersService: UsersService, private dataService: DataService) {}

  name = new FormControl(null, [Validators.required, Validators.maxLength(20)]);
  surname = new FormControl(null, [Validators.required, Validators.maxLength(20)]);
  login = new FormControl(null, [Validators.required, Validators.maxLength(15)]);
  password = new FormControl(null, [Validators.required, Validators.maxLength(15)]);

  form = new FormGroup({
    name: this.name,
    surname: this.surname,
    login: this.login,
    password: this.password
  });

  ngOnInit(): void {
  }

  navigateToRegister(): void {
    this.router.navigate(['login'], {relativeTo: this.activatedRoute.parent});
  }

  userRegistration(form: FormGroup): void {
    // todo перевірка чи такий юзер вже зараєстрований. Це робити на стороні апішки?
    this.usersService.addUser(form.getRawValue()).subscribe(value => {
      if (value) {
        window.alert(`Added new user with:\nName: ${value.name} \nSurname: ${value.surname}`);
        form.reset();
      }
    });
    this.navigateToRegister();
  }

}
