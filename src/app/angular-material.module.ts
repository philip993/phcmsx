import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
} from "@angular/material";
@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatInputModule],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule {}
