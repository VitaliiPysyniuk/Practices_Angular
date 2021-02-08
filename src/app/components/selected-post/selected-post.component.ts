import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {IPost} from "../../models";

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.css']
})
export class SelectedPostComponent implements OnInit {

  selectedPost: IPost;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSelectedPost().subscribe(value => this.selectedPost = value);
  }

}
