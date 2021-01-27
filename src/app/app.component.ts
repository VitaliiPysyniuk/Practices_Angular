import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  // template: `<router-outlet></router-outlet>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // constructor(router: Router, activatedRoute: ActivatedRoute) {
  //   router.navigate(['/home'], {relativeTo: activatedRoute});
  // }

}
