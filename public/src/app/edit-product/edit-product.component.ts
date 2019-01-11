import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route : ActivatedRoute, private _router:Router) { }
  prodId : any; 
  errorMsg = "";
  prodToUpdate = {title:"", price:"", imgUrl:"", id: ""};
  ngOnInit() {
    this._route.params.subscribe(data => {
      // console.log(data);
      this.prodId = data.id;
    });
    this.getProd(this.prodId);
  }
  getProd(id){
    let obs = this._httpService.getProd(id);
    obs.subscribe(data => {
      // console.log("Should be the object to update: ", data);
      this.prodToUpdate.title = data['product'].title;
      this.prodToUpdate.price = data['product'].price;
      this.prodToUpdate.imgUrl = data['product'].imgUrl;
      this.prodToUpdate.id = data['product']._id;
    })
  }
  submitProd(){
    console.log("this is what we are sending: ", this.prodToUpdate);
    let obs = this._httpService.updateProd(this.prodToUpdate);
    obs.subscribe(data => {
      console.log("back from server/db: ", data);
      if(data['error']){
        this.errorMsg = data['error'];
      } else{
        this._router.navigate(['/products/view']);
      }
    })
  }

}
