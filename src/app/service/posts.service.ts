import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private data = 'assets/db.json';
  constructor(private http: HttpClient) {}

  fetchData(): Observable<Post[]> {
    return this.http.get<Post[]>(this.data);
  }
}
