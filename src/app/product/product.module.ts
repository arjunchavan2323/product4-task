import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashbordComponent } from './product-dashbord/product-dashbord.component';
import { ProductCountComponent } from './product-count/product-count.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SignModule } from '../sign/sign.module';



@NgModule({
  declarations: [
    ProductDashbordComponent,
    ProductCountComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    SignModule
  ],
  exports:[ProductDashbordComponent]
})
export class ProductModule { }
