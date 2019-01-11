import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  newProd(prod){
    // console.log("in service: ", prod);
    return this._http.post('/api/product', {prod: prod});
  }
  getAll(){
    return this._http.get('/api/products');
  }
  getProd(id){
    let url = "/api/product/" + id;
    return this._http.get(url);
  }
  updateProd(product){
    console.log('sending this to Express: ', product);
    return this._http.put('/api/product/', product);
  }
  deleteProd(id){
    let url = "/api/product/" + id;
    return this._http.delete(url);
  }
}
