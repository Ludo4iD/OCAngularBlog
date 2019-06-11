import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onIncreaseLoveIts() {
    this.postService.increaseLoveItsOnOne(this.post);
  }

  onDecreaseLoveIts() {
    this.postService.decreaseLoveItsOnOne(this.post);
  }

  onRemovePost() {
    this.postService.removePost(this.post);
  }
}
