import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './componenets/all-products/all-products.component';
import { ProductDetailsComponent } from './componenets/product-details/product-details.component';
// import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule],
  exports: [],
})
export class ProductsModule {}
