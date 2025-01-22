import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BaseHttpService } from "../../../shared/data-acces/base-http.service";
import { Observable } from "rxjs";
import { Product } from "../../../shared/interfaces/product.interface";

@Injectable({providedIn: 'root'})
export class ProductServices extends BaseHttpService{
  getProducts():Observable<Product[]>{
    return this.http.get<any[]>(`${this.url}/products`);
  }

}
