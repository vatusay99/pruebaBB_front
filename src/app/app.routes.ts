import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'products',
    loadChildren: () => import('./components/product/product-shell/product.route')
  },
  {
    path:'**',
    redirectTo:'products'
  }
];
