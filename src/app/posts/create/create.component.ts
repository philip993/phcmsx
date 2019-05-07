import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../post.model";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  post: Post;
  form: FormGroup;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(""),
      details: new FormControl("")
    });
  }

  onSubmit(title: string, details: string) {
    this.postService.newPost(this.form.value.title, this.form.value.details);
  }
}
