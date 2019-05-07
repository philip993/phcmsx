import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { AngularMaterialModule } from "../angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CreateComponent, ViewComponent],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
  exports: [ViewComponent, CreateComponent]
})
export class PostModule {}
