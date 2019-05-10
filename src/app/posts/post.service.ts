import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  posts: Post[] = [];
  post: Post;
  private postListener = new Subject<Post[]>();
  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    this.http
      .get<{ posts: Post[] }>("http://localhost:3000/posts")
      .subscribe(responseData => {
        this.posts = responseData.posts;
        this.postListener.next([...this.posts]);
      });
  }

  getPostsUpdated() {
    return this.postListener.asObservable();
  }

  newPost(title: string, details: string, typer: string) {
    const post: Post = {
      _id: null,
      title: title,
      details: details,
      typer: typer
    };
    this.http
      .post("http://localhost:3000/posts", post)
      .subscribe(responseData => {
        this.router.navigateByUrl("/");
        console.log(responseData);
      });
  }
}
