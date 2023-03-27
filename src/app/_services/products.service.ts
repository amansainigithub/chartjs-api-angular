import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }



  getProduct(){
    return this.http.get("http://localhost:3000/posts")
  }

  getComments(){
    return this.http.get("http://localhost:3000/comments")
  }
}
