import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  posts: Post[] = [];
  private postListener = new Subject<{ title: string; details: string }>();
  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    this.http
      .get<{ posts: Post[] }>("http://localhost:3000/posts")
      .subscribe(responseData => {
        this.posts = responseData.posts;
      });
  }

  getPostsUpdated() {
    return this.postListener.asObservable();
  }

  newPost(title: string, details: string) {
    const post: Post = {
      title: title,
      details: details
    };
    this.http
      .post("http://localhost:3000/posts", post)
      .subscribe(responseData => {
        this.router.navigateByUrl("/");
        console.log(responseData);
      });
  }
}
