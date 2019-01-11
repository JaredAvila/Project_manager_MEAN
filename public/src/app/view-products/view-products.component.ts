import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private _httpService : HttpService, private _router: Router) { }
  prods = [];
  errorMsg ="";
  ngOnInit() {
    this.getAllProds();
  }
  getAllProds(){
    let obs = this._httpService.getAll();
    obs.subscribe(data => {
      console.log("Heres your data: ", data);
      this.prods = data['product'];
    })
  }
  deleteMe(id){
    console.log("this is what you get bitch: ", id);
    let obs = this._httpService.deleteProd(id);
    obs.subscribe(data => {
      console.log("YOURE FIRED!!! ", data);
      if(data['error']){
        this.errorMsg = "SOmethin went wrong..."
      }else{
        this.errorMsg = "";
        this.getAllProds();
        this._router.navigate(['/products/view']);
      }
    })
  }
}
