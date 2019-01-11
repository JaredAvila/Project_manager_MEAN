import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path : 'products', component : ProductsComponent, children : [
    { path : 'edit/:id', component : EditProductComponent },
    { path: '', pathMatch: 'full', redirectTo: '/products/view' },
    { path : 'view', component : ViewProductsComponent  }
  ] },
  { path : 'home', component : HomeComponent },
  { path : 'products/new', component : CreateProductComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
