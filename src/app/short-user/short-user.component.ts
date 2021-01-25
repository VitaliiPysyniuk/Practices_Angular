import { Component, OnInit, Input } from '@angular/core';
import {IUser} from "../../models";

@Component({
  selector: 'app-short-user',
  templateUrl: './short-user.component.html',
  styleUrls: ['./short-user.component.css']
})
export class ShortUserComponent implements OnInit {
  @Input() user: IUser;


  constructor() { }

  ngOnInit(): void {
  }

}
