import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewComponent } from "./posts/view/view.component";
import { CreateComponent } from "./posts/create/create.component";

const routes: Routes = [
  { path: "view", component: ViewComponent },
  { path: "create", component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
