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
  loading = false;
  types: any = [{ abb: "Private" }, { abb: "Public" }];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loading = true;
    this.form = new FormGroup({
      title: new FormControl(""),
      details: new FormControl(""),
      typer: new FormControl("")
    });
  }

  onSubmit(title: string, details: string, typer: string) {
    this.loading = true;
    this.postService.newPost(
      this.form.value.title,
      this.form.value.details,
      this.form.value.typer
    );
  }
}
