import { Component, OnInit } from '@angular/core';
import { ipro, iproduct } from 'src/app/model/mode';
import { ProductService } from 'src/app/service/product.service';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private _utilityservice :UtilityService, private _productArray:ProductService) { }

  ngOnInit(): void {
  }
  onaddd(name:HTMLInputElement, pg:HTMLInputElement){
  let pass={
    pName:name.value,
    pDetail:pg.value,
    psatus:ipro.Inprogress,
    id:this._utilityservice.uuid()
  }
          name.value=''
           pg.value=''
  
          this._productArray.getaddproduct(pass)
  
  
  
  }
  

}
