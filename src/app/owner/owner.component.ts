import {Component, Input, OnInit} from '@angular/core';
import {IOwner} from '../../interfaces';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  @Input()
  owner: IOwner;
}
