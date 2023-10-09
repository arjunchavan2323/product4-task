import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { SignModule } from './sign/sign.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    SignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
