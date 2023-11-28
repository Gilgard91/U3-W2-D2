import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inattivi',
  templateUrl: './inattivi.component.html',
  styleUrls: ['./inattivi.component.scss'],
})
export class InattiviComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService
      .fetchData()
      .pipe(
        map((data) =>
          data.filter((item) => {
            return item.active == false;
          })
        )
      )
      .subscribe((filteredData) => {
        this.posts = filteredData;
      });
  }
}
