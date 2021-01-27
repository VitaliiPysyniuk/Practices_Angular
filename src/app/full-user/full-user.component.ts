import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
      this.user = router.getCurrentNavigation().extras.state as IUser;
      console.log(this.user);
      console.log(router.getCurrentNavigation().extras.state);
    });
  }

  ngOnInit(): void {
  }

  goToUserPosts(): void {
    this.router.navigate(['posts'], {relativeTo: this.activatedRoute});
  }

}
