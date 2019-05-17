import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CrudComponent,
  ],
})
export class FormsModule { }
