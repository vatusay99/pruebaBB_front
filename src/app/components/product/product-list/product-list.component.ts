import { Component, inject } from '@angular/core';
import { ProductStateService } from '../data/product-state.service';
import { ProductServices } from '../data/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductStateService]
})
export default class ProductListComponent {

  title: string = 'Listado de productos'

  productsState = inject(ProductStateService);

}
