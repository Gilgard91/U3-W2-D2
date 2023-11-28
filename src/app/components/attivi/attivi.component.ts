import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-attivi',
  templateUrl: './attivi.component.html',
  styleUrls: ['./attivi.component.scss'],
})
export class AttiviComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.fetchData().subscribe((data) => {
      this.posts = data;
    });
  }
}
