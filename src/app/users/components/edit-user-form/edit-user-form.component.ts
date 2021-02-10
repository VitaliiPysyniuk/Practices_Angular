import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../../services";
import {IUser} from "../../../models";
import {UsersService} from "../../services";

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {

  userToUpdate: IUser;
  form: FormGroup;
  name: FormControl;
  surname: FormControl;
  login: FormControl;
  password: FormControl;

  constructor(private router: Router, private dataService: DataService, private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    activatedRoute.params.subscribe(value => {
      this.userToUpdate = router.getCurrentNavigation().extras.state as IUser;
      this.name = new FormControl(this.userToUpdate.name, [Validators.required, Validators.maxLength(20)]);
      this.surname = new FormControl(this.userToUpdate.surname, [Validators.required, Validators.maxLength(20)]);
      this.login = new FormControl(this.userToUpdate.login, [Validators.required, Validators.maxLength(15)]);
      this.password = new FormControl(this.userToUpdate.password, [Validators.required, Validators.maxLength(15)]);

      this.form = new FormGroup({
        name: this.name,
        surname: this.surname,
        login: this.login,
        password: this.password
      });
    });
  }

  // name = new FormControl('aaa', [Validators.required, Validators.maxLength(20)]);
  // surname = new FormControl('bbb', [Validators.required, Validators.maxLength(20)]);
  // login = new FormControl('ccc', [Validators.required, Validators.maxLength(15)]);
  // password = new FormControl('ddd', [Validators.required, Validators.maxLength(15)]);
  //
  //
  // form = new FormGroup({
  //   name: this.name,
  //   surname: this.surname,
  //   login: this.login,
  //   password: this.password
  // });

  ngOnInit(): void {
  }

  saveChanges(form: FormGroup): void {
    this.usersService.updateUser({Id: this.userToUpdate.id, ...form.getRawValue()})
      .subscribe(value => {
        this.router.navigate(['users']);
        this.dataService.setUpdatedUser(form.getRawValue());
      });
  }

}
