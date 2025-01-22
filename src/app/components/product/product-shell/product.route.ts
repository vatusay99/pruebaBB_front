import { Routes } from "@angular/router";

export default [

  {path: '', loadComponent: ()=> import('../product-list/product-list.component')},
  {path: 'create', loadComponent: ()=> import('../create-product/create-product.component')},

] as Routes
