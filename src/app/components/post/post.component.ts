import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: IPost;
  selectedFlag = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getSelectedPost().subscribe(value => {
      if (value && value.id !== this.post.id) {
        this.selectedFlag = true;
      }
    });
  }

  onPostSelect(): void {
    this.dataService.setSelectedPost(this.post);
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute});
    this.selectedFlag = false;
  }
}
