import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/products';

@Component({
  selector: 'app-all-products',
  templateUrl: '../all-products/all-products.component.html',
  styleUrls: ['./all-products.component.scss'], // Corrected 'styleUrl' to 'styleUrls'
})
export class AllProductsComponent implements OnInit {
  products: product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  caetproducts: any[] = [];
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('error');
      }
    );
  }
  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res;
      },
      (error) => {
        this.loading = false;
        alert('error');
      }
    );
  }
  filtercatogery(event: any) {
    let value = event.target.value;
    if (value == 'All') {
      this.getProducts();
    } else {
      console.log(value);
      this.getproductsofsmecategory(value);
    }
  }

  getproductsofsmecategory(keyword: string) {
    this.loading = true;
    this.service.getproductsbycategotry(keyword).subscribe((res: any) => {
      this.products = res;
      this.loading = false;
    });
  }
  addTocart(event: any) {
    if ('cart' in localStorage) {
      this.caetproducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.caetproducts.find(
        (item) => item.item.id == event.item.id
      );
      if (exist) {
        alert('product already choosen');
      }
      this.caetproducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.caetproducts));
    } else {
      this.caetproducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.caetproducts));
    }
  }
}
