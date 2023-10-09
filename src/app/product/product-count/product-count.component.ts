import { Component, Input, OnInit } from '@angular/core';
import { ipro, iproduct } from 'src/app/model/mode';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss']
})
export class ProductCountComponent implements OnInit {
@Input()product!:iproduct
all=ipro
  constructor(private _productservice:ProductService) { }

  ngOnInit(): void {
  }
  onadd(product:iproduct, status:ipro){
    this._productservice.getupdatestatus(product, status)

  }

}
