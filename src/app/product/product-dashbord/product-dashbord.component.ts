import { Component, Input, OnInit } from '@angular/core';
import { iproduct } from 'src/app/model/mode';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-dashbord',
  templateUrl: './product-dashbord.component.html',
  styleUrls: ['./product-dashbord.component.scss']
})
export class ProductDashbordComponent implements OnInit {
productArray:Array<iproduct>=[]

  constructor(private _productservice:ProductService) { }

  ngOnInit(): void {
    this.productArray=this._productservice.getreturnarray()
  }



}
