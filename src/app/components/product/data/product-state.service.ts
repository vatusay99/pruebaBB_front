import { inject, Injectable } from "@angular/core";
import { Product } from "../../../shared/interfaces/product.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductServices } from "./product.service";
import { map } from "rxjs";

interface State{
  products: Product[];
  status: 'loading' | 'success'|'error';
}

@Injectable()
export class ProductStateService{

  private productServices = inject(ProductServices);

  private initialState: State = {
    products: [],
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.productServices
      .getProducts()
        .pipe(map((products) =>({products, status: 'success' as const}))),
    ],
  })

}

