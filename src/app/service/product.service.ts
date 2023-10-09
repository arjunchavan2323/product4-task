import { Injectable } from '@angular/core';
import { ipro, iproduct } from '../model/mode';
import { SnackbarService } from '../snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _snackbarservice:SnackbarService) { }

  productArray:Array <iproduct>=[{
    pName:"samsung m13",
    pDetail:"123 5",
    psatus:ipro.Inprogress,
    id:"qwertyui"
  },
  {
    pName:"samsung m13",
    pDetail:"123 5",
    psatus:ipro.Dicepatch,
    id:"qsdfghjtyui"
  }
]


getreturnarray(){
  return this.productArray
}
getaddproduct(pid:iproduct){
this.productArray.push(pid)
this._snackbarservice.opensnackservice("angular", "ddd")
}


getupdatestatus(product:iproduct, status:ipro){
this.productArray.forEach(proud=>{
  if(proud.id===product.id){
    proud.psatus=status
  }
})
}
}
