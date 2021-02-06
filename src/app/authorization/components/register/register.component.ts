import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

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
    console.log(form);
    console.log(form.getRawValue());
  }

  showForm(form: FormGroup): void {
    console.log(form);
  }

}
