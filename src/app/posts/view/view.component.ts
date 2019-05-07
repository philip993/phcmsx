import { Component, OnInit, OnDestroy } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../post.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit, OnDestroy {
  posts: Post;
  private postSub: Subscription;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts();
    this.postSub = this.postService
      .getPostsUpdated()
      .subscribe(responseData => {
        this.posts = responseData;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
