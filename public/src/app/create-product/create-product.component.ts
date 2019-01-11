import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }
  newProd = {title: "", price: "", imgUrl: ""};
  errorMsg = "";
  ngOnInit() {
  }
  createProd(){
    let obs = this._httpService.newProd(this.newProd);
    obs.subscribe(data => {
      if(data['error']){
        this.errorMsg = "Can't leave fields blank";
      } else {
        this._router.navigate(['/products/view']);
      }
    })

  }
}
